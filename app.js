const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = ("/api", (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess") {
        next ();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
});

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("hi, i'm the root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.get("/err", (req, res) => {
    cggd=hjhgj;
});

app.use((err, req, res, next) => {
    let {status = 500, message = "Some err Occured"} = err;
    res.status(status).send(message);
});

// app.use((req, res) => {
//     res.send("page not found");
// });

app.listen(8080, (req, res) => {
    console.log("server  listening to the port 8080");
});