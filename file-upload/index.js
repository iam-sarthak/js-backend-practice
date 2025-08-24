const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '/upload');
    },
    filename:(req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage: storage}); // ok with storage nulter get to know ki 

app.post('/upload', upload.single('filename') ,(req, res) => {
    res.send("file upload success ")
})