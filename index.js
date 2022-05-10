// 01-05-2022
// ini merupakan starter untuk memulai projek express 
// dibuat oleh hadi gunawan tambunan
// run 'nodemon index' untuk menjalankan server

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const book = require("./router/buku");

// db connection 
mongoose.connect('mongodb://localhost:27017/book');
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log("database connection established")
})
//

const app = express();
const URL = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.listen(URL,()=>console.log(`server start on : http://127.0.0.1:3000`));
app.use('/api/book', book);