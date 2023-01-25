const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

let studentData = [
  {name: 'Petar', note: 10},
  {name: 'Cacile', note: 6},
  {name: 'Yassine', note: 12},
  {name: 'Anika', note: 2}
]

let message = 'Congratulations of your grades!'

app.get('/', (req, res) => {
  console.log('foo')
  res.render('index.ejs', {
    students: studentData,
    message : message
  })
})

app.listen(3000, () => {
  console.log(`App listening on http://127.0.0.1:3000`)
})