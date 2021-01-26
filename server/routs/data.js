const {Router} = require('express')
const auth = require('../middleware/auth-middleware')
const SqlHandler = require('../sqlHandler')
const router = Router()


router.post('/generate', auth, async (req, res) => {
    try {
      const { data } = req.body
      console.log(data)
  
      const sql = new SqlHandler()

      const isExist = await sql.getDataById(data)
      
      if (!isExist.length) {
        res.status(500).json({ message: 'Блок не подключен к бд' })
      }

      const wasWritten = await sql.getIsWritten(req.user.userId, data)

      if (wasWritten.length) {
        res.status(500).json({ message: 'Такой блок уже был записан' })
      }

      await sql.setData('cbtouser',[data, req.user.userId,], ['id_cb', 'id_user'])
  
      res.status(201).json({ message:"Блок был удачно подключен" })
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
})

router.post('/', auth, async (req, res) => {
  try {
    const sql = new SqlHandler()
    const { data } = req.body

    const sensors = await sql.getSensorsByBlock(data)
    // БЕРЕМ ВСЕ СЕНСОРЫ ПОЛУЧАЕМ ОТДЕЛЬНО ДАТУ ОТ КАЖДОГО ИЗ НИХ ДЖОЙНОМ И ПИХАЕМ ЕЕ В МАССИВ
    
    const finalData = [] 

    for (let item of sensors) {
      let temp = await sql.joinSensorDataById(item.id_sensor)
      finalData.push(temp[0])
    }

    console.log(finalData)

    res.json(finalData)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

router.get('/block', auth, async (req, res) => {
  try {
    const sql = new SqlHandler()

    const blocks = await sql.getDataByUser(req.user.userId)
    
    console.log(blocks)
    
    res.json(blocks)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

router.post('/change', auth, async (req, res) => {
  try {
    const sql = new SqlHandler()

    const {data} = req.body
    console.log(data)

    const {block, type, dataIn} = data

    // ВАЛИДАЦИЯ НА ПУСТЫЕ БЛОКИ

    if (block === '') {
      res.status(500).json({message: "Укажите блок"})
    }

    if (dataIn === '') {
      res.status(500).json({message: "Введите корректные данные"})
    }

    // ВАЛИДАЦИЯ НА ГРАНИЧНЫЕ ЗНАЧЕНИЯ

    // ОТПРАВКА В ТАБЛИЦУ ВМЕСТЕ С ТЕКУЩИМ ВРЕМЕНЕМ ОТПРАВКИ


    // ПОЛУЧАЕМ ДАТУ И ВРЕМЯ

    let date = new Date()
    let dateFull = `${date.getHours()}${date.getMinutes()}${date.getDate()}0${date.getMonth() + 1}${date.getFullYear()}`
    console.log(dateFull)

    // ОТПРАВЛЯЕМ ДАННЫЕ В БД

    let idControlTemp = await sql.anotherWay(block)
    let {id_control} = idControlTemp[0]

    console.log(id_control)

    // ПРОВЕРЯЕМ ЕСТЬ ЛИ В ТАБЛИЦЕ ТАКОЙ КОНТРОЛЬ

    let existing = await sql.getControlById(id_control)

    if (existing.length) {
      // ЕСЛИ ОН ЕСТЬ ТО Я АПДЕЙЧУ ДАННЫЕ И ВРЕМЯ ИХ ОТПРАВКИ

      await sql.updateControlData(id_control, dataIn)
      await sql.updateControlTime(id_control, dateFull)
    }else{
      // ЕСЛИ НЕТ ТО ИДЕТ ПОЛНЫЙ ЦИКЛ

    await sql.setData('settingscontrol',[block, id_control, dataIn, dateFull], ['id_cb', 'id_control', 'data', 'datatimecurrent'])

    }


    res.json(data)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

module.exports = router