const cors = require('cors')
const express = require('express')

const app = express()

app.use('/api/auth', require('./routs/auth'))
app.use('/greenhouse', require('./routs/green'))
app.use(cors())



app.listen(3001, () => {
    console.log('Server is listening...')
})

