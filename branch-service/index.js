const  mysql = require("mysql")
const source = "mysql://supawat:janthon@localhost/sample001"
const pool = mysql.createPool(source)

const express = require('express')

const server = express()
server.listen(12400)
server.get("/list-staff", listStaff)

function listStaff(request, response) { // write this pattern only
    pool.query("select * from sample001.employees" , 
        function display(error, data){
            if (error === null)
                response.send(data)
            if (error !== null)
                response.send(error)
        })
}


