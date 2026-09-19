const express = require('express');
const { PORT , NAME} = require('./config/serverConfig')

const setupAndStartServer = async ()=>{
    const app = express();
    app.listen(3000,()=>{
        console.log(`server started at ${PORT}`)
        console.log(NAME)
    })
}

setupAndStartServer()