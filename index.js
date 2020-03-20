const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("SERVEUR STARTED...");
});

app.get('/', (req, res) => {
    console.log("acces to / path");
    res.send(`<!Doctype html>
                    <html>
                        <head>
                            <title>Projet-2</title>
                        </head>
                            <body>
                            <h1>hello world ! </h1>
                            </body>
                            </html>
                            `);
});

app.get("/about", (req, res) => {
    res.send("about");
});