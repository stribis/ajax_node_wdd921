const express = require('express')
const fetch = require('node-fetch')

const app = express()
// TODO: Make port dynamic
const port = 3002

app.listen(port, () => {
  console.log(`App started on: http://127.0.0.1:${port}`)
})

app.use(express.static('public'))
app.use(express.json({
  limit:'30mb'
}))

app.get('/weather/:latlon', async (req, res) => {
  const latlon = req.params.latlon.split(',')
  console.log(latlon)


  // Weather API url data
  const weather_key = 'af1eb7ff29c464bd26db09fc2c06ca09'
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon[0]}&lon=${latlon[1]}&appid=${weather_key}&units=metric`

  // Request Weather data
  const weatherResponse = await fetch(weather_url)
  const weatherData = await weatherResponse.json()

  console.log(weatherData)

  const data = {
    weather: weatherData
  }

  res.json(data)
})