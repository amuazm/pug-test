const express = require("express");
const pug = require("pug");

app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index.pug", { message: "This is a message from index.js" })
});

app.get("/views/css/style.css", (req, res) => {
    return res.sendFile("/views/css/style.css", { root: "." });
});

app.listen(53134, console.log("Available at https://localhost:53134"));