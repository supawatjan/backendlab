const http = require('http')

const server = http.createServer(function (req, res) {
    res.write('Welcome to HTTP This is Web Server by Node.js')
    res.end()
})


server.listen(3000)