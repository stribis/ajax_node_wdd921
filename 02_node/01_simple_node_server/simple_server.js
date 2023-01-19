const http = require('http')

const hostname = '127.0.0.1' // Localhost
const port = 3000


const server = http.createServer((req, res) => {
  console.log(req)
  res.statusCode = 200 // OK
  res.setHeader('Content-Type', 'text/plain')
  res.end('You got a response from the HTTP server :D')
  
})

server.listen(port, hostname, () => {
  console.log(`The server is listening on http://${hostname}:${port}`)
})