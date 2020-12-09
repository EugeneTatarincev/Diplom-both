const cors = require('cors')
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routs/auth'))
app.use('/api/data', require('./routs/data'))
app.use('/greenhouse', require('./routs/green'))
// app.use(cors())


const PORT = config.get('port') || 3001
  
app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))