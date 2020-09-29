const { Router } = require('express')
const SqlHandler = require('../postgresql/sqlHandler')

const router = Router()
const sqlObj = new SqlHandler()

router.get('/data', async (req, res) => {
    const data = await sqlObj.getData()
    res.send(data)
    sqlObj.client.end()
})

module.exports = router