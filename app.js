const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("hi, i'm the root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

// app.use( (req, res, next) => {
//     req.time = Date.now();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

app.use((req, res) => {
    res.send("page not found");
});

app.listen(8080, (req, res) => {
    console.log("server  listening to the port 8080");
});