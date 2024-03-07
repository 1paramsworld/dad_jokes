const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

const uipath = path.join(__dirname);
app.set("view engine", "ejs");
app.set("views", uipath);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Define storage settings for Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.render("homepage");
});

app.post("/upload", upload.single("file"), (req, res) => {
    console.log(req.file);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
