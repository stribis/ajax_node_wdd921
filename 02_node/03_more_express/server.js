const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(3000, () => {
  console.log(`App listening on http://127.0.0.1:3000`)
})