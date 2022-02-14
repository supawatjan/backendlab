const express = require('express')
const server = express()
server.listen (42500)
server.use(express.static('.')) //find index.html