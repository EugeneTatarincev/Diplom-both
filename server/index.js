const cors = require('cors')
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routs/auth'))
app.use('/greenhouse', require('./routs/green'))
// app.use(cors())


const PORT = config.get('port') || 3001

async function start() {
    try {
      await mongoose.connect(config.get('mongoUri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      })
      app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
      console.log('Server Error', e.message)
      process.exit(1)
    }
  }
  
start()