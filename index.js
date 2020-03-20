const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("SERVEUR STARTED...");
});

app.get('/', (req, res) => {
    console.log("acces to / path");
    res.send("hello world");
});

app.get("/about", (req, res) => {
    res.send("about");
});