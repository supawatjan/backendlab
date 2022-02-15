const express = require("express")
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')

const app = express()
const port = process.env.PORT || 4000 //port from nodemon  and if 3000 not work open in port 4000 instead
 
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'/public/')))

app.set("views", "./src/views") // tell loaction file
app.set("view engine", "ejs") // call ejs work for view engine //use file .ejs too

// app.get("/", (req, res) =>{ //work when index.html cant open
//     res.send("Hello Express")
// })

//****************below try to use EJS *******************/ 
app.get("/", (req, res)=>{
    res.render('index',{tool:"EJS", carBrands: ['Honda', 'Mazda', 'Toyota']}) 
    // tool is data send to ejs file
    // index is filename in views folder
})

app.listen(port, ()=>{
    debug("Listening on port ", chalk.green(" : ",port))
})