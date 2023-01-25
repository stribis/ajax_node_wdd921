const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

// Start express app
const app = express()


// Tell express to use body parser
app.use(bodyParser.urlencoded({extended:true}))
// Use the public folder as static directory
app.use(express.static('public'))
// Turn on EJS as view engine
app.set('view engine', 'ejs')
// API Key for Openweathermaps (openweathermap.org)
const apiKey = 'af1eb7ff29c464bd26db09fc2c06ca09'

app.get('/', (req, res) => {
  // Render index page
  res.render('index.ejs', {
    data: null,
    error: null
  })
})

app.post('/', (req, res) => {
  const city = req.body.city
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`
  getData(url, res, city)
  
})


app.listen(3000, () => {
  console.log('Server has started 😀 : http://localhost:3000')
})

// Fetch Request for Openweathermap API 
async function getData (url, res, city) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    
    const responseCountry = await fetch (`https://restcountries.com/v3.1/alpha/${data.sys.country}`)
    const dataCountry = await responseCountry.json()
    console.log(dataCountry)

    if ( data.cod === '404') {
      res.render('index.ejs', {
        data: null,
        error: 'The city was not found in the API'
      })
    } else {
      console.log(data)
      const datapack = {
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        feels: data.main.feels_like,
        city: city,
        country: dataCountry[0].name.common,
        flag: dataCountry[0].flag
      }
    
      res.render('index.ejs', {
        data: datapack,
        error: null
      })
    }
  } catch (error) {
    console.error(error)
    res.render('index.ejs', {
      data: null,
      error: 'Connection error with the api'
    })
  }

}

