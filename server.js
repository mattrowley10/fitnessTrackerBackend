const express = require("express");
const morgan = require("morgan");
const PORT = 3000
const server = express();

const client = require('./db/client');
client.connect();

server.use(express.json());
server.use(morgan("dev"));


server.use("/api", require("./routes"))

server.use((err, req, res, next)=>{
    res.send = {
        message: err.message,
        name: err.name,
        stack: err.stack,
    };
});

server.listen(PORT, ()=>{
    console.log(`Server listening on PORT ${PORT}`)
});
