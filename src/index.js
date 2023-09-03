const express = require("express");

const {PORT} = require('./configs/serverConfig')

const setupAndStartServer = async () => {
    // create the express object
    const app = express();
    const PORT = 3000;
    app.listen(PORT , () =>{
        console.log(`server started at ${PORT}`) 
    })
}

setupAndStartServer();