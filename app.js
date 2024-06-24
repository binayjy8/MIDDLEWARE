const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send();
});

app.listen(8080, (req, res) => {
    console.log("server  listening to the port 8080");
});