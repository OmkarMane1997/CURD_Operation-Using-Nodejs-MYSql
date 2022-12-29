require("dotenv").config(); //import ENV file
const express = require("express"); // import express
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const assert = require("assert");
const { StatusCodes } = require("http-status-codes");
// const path = require("path");

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],
    maxAge: '1m',
    redirect: false
  }
  app.use(express.static('build', options))

// To  create  Port using env file
const PORT = process.env.PORT || 4000;


// Creating the reference on Express
const app = express()

//Body Parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
// import route
const CurdRoute = require('./Route/CURDRoute')
// applying
// app.use(`/api/v1/Curd`,CurdRoute)
app.use(`curd-operations-mysql.cyclic.app`,CurdRoute)

// Default path if Path is not found the show the error
// app.all(`*`, (req, res) => {
//     res.status(StatusCodes.NOT_FOUND).json({ msg: `The Request route path Not Found` })
// })

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
