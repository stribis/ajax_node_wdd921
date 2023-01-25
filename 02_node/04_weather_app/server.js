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
  res.render('index.ejs')
})

app.post('/', (req, res) => {
  const city = req.body.city
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`
  getData(url)
  
})


app.listen(3000, () => {
  console.log('Server has started 😀 : http://localhost:3000')
})

// Fetch Request for Openweathermap API
async function getData (url) {
  const response = await fetch(url)
  const data = await response.json()

  console.log(data)
}
