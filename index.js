require('dotenv').config(); 

const express = require("express");
const app = express();
const path = require("path");

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const port = process.env.PORT || 3000; 

const uipath = path.join(__dirname);
app.set("view engine", "ejs");
app.set("views", uipath);

app.get("/", async (req, res) => {
    try {
        const response = await fetch("https://icanhazdadjoke.com/slack");
        const data = await response.json();
        res.render("ui", { hey1: data.attachments[0].fallback });
    } catch (error) {
        console.error("Error fetching dad joke:", error);
        res.status(500).send("Something went wrong");
    }
});

app.post("/newquote", (req, res) => {
    res.redirect("/");
});

app.listen(port);
