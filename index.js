const express=require("express");
const app=express()
const path=require("path");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const port = process.env.PORT || 3000; // Use port from environment variable or default to 3000

const uipath=path.join(__dirname)
app.set("view engine","ejs")
app.set("views",uipath);

app.get("/",(req,res)=>{
    const url="https://icanhazdadjoke.com/slack";
    fetch(url).then((data)=>{
        return data.json()
    }).then((data)=>{
        res.render("ui",{hey1:data.attachments[0].fallback})
    })
})

app.post("/newquote",(req,res)=>{
    res.redirect("/")
})

app.listen(port)