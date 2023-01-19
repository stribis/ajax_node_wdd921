const express = require('express')
const app = express()

const port = 3000

// Middleware
let requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  res.send(`Hello Express 😀, you accessed the server at ${req.requestTime}`)

})

app.get('/about', (req, res) => {
  res.send('This is the about page 🏃‍♂️')
})

app.get('/about/foo', (req, res) => {
  res.send(`
    <form method="post" action="/api">
      <input type="text" name="greeting">
      <input type="submit">
    </form>
  `)
})

app.post('/api', (req, res) => {
  console.log(req.body)
  res.send('Got a POST request from Client ☀️')
} )


app.listen( port, () => {
  console.log(`The server is listening on http://127.0.0.1:${port}`)
})