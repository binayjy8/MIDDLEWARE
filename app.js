const express = require("express");
const app = express();

app.use( () => {
    console.log("i'm the middleware");
});

app.get("/", (req, res) => {
    res.send("hi, i'm the root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.listen(8080, (req, res) => {
    console.log("server  listening to the port 8080");
});