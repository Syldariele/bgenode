const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("SERVEUR STARTED...");
});

app.get('/', (req, res) => {
    console.log("acces to / path");
    const html = fs
        .readFileSync("./src/index.html")
        .toString("utf8");
    res.send(html);
});

app.get("/about", (req, res) => {
    res.send("about");
});