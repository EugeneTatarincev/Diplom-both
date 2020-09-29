const cors = require('cors')
const greenRoutes  = require('./routs/green')
const SqlHandler = require('./postgresql/sqlHandler')
const express = require('express')

const app = express()

app.use('/greenhouse', greenRoutes)
app.use(cors())
const sqlObj = new SqlHandler()

app.get('/data', async (req, res) => {
    const data = await sqlObj.getData()
    res.json(data)
    // sqlObj.client.end()
})

app.listen(3001, () => {
    console.log('Server is listening...')
})

