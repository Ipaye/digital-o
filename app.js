const http = require('http')
const fs = require('fs')

http
  .createServer(function (request, response) {
    fs.readFile('./index.html', function (err, content) {
      if (!err) {
        response.end(content)
      } else {
        response.end('404')
      }
    })
  })
  .listen(3000)

console.log('server started on port 3000')
