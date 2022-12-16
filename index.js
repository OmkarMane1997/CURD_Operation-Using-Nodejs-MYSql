require("dotenv").config(); //import ENV file
const express = require("express"); // import express
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const assert = require("assert");
const { StatusCodes } = require("http-status-codes");

// To  create  Port using env file
const PORT = process.env.PORT;

// Creating the reference on Express
const app = express()

//Body Parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
// import route
const CurdRoute = require('./Route/CURDRoute')
// applying
app.use(`/api/v1/Curd`,CurdRoute)

// Default path if Path is not found the show the error
app.all(`*`, (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({ msg: `The Request route path Not Found` })
})

const startServer = async()=>{
    try {

        
        app.listen(PORT,()=>{
            console.log(`Server is Start And Listening on http://localhost:${PORT}`)
        })
    } catch (error) {
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:error.message})
    }
}
startServer();