const express = require('express');
const bodyParser = require('body-parser')
const { PORT , NAME} = require('./config/serverConfig')
const CityRepo = require('./repository/city_repo')

const setupAndStartServer = ()=>{
    const app = express(); //create an express object
    app.use(bodyParser.json()); //either i can use app.use(express.json()) for (simple json format)
    app.use(bodyParser.urlencoded({extended:true})); //just encoded the complex data into json for (name=Shashank&age=24) it makes to json format
    //i could also use app.use(express.json())
    //app.use(express.urlencoded({extended:true})) for traditional HTML form data,


    app.listen(PORT,async ()=>{
        console.log(`server started at ${PORT}`)
        console.log(NAME)
        const repo = new CityRepo();
        repo.createCity({
            name : "Gwalior",
            country :"India"
        })
    })
}

setupAndStartServer()