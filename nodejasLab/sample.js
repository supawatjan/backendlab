const express = require("express")
const server = express()
server.listen(12500)
server.get("/check-status", showStatus)
server.get("/check-date", showDate)
server.get("/get-area", showArea) 
server.get("/get-interest" ,showInterest) //dont forget /(slash)

function showStatus(request, response){
    response.send("Server is OK")
    //response.send() can send 3 things: object , array , string
}

function showDate(request, response){
    let result = {}
    result.current = new Date // create property current
    response.send(result)
}

function showArea(request, response) {
    let r = + request.query.radius || 0 //** รับค่า radius มาเก็บไว้ที่ตัวแปร r
    let result = {} // ส่งตัวเลขผ่าน object
    result.area = Math.PI * r ** 2
    response.send(result)
} // http://localhost:12500/get-area?radius=5.2

function showInterest(request, response){
    let y = +request.query.year || 0
    let d = +request.query.deposit || 0
    let result = {}
    result.deposit = d
    result.year = y
    result.total = (d * 1.0125 ** y).toFixed(8)

    response.send(result) 
}