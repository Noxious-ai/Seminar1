const express = require("express");
const app = express();
const port = 8080;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res)=>{
    res.send("Hello ");
});

app.get("/server/ping", (req, res)=>{
    res.send("Pong");
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});

