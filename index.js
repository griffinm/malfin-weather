import express from 'express'
import { getWeather } from './src/getWeather.js'

const app = express()
const port = 8080

app.get('/health', (req, res) => {
  res.json({
    success: true,
    time: new Date(),
  })
})

app.get('/forecast', (req, res) => {
  getWeather().then((data) => {
    res.json({ data })
  })
})

app.listen(port, () => {
  console.log(`App started and is listening on port ${port}`)
})
