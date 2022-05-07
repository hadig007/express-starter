// 01-05-2022
// ini merupakan starter untuk memulai projek express 
// dibuat oleh hadi gunawan tambunan

const express = require("express");
const cors = require("cors")

const app = express();
const URL = 3000;

app.use(cors())

app.listen(URL,()=>console.log(`server start on : http://127.0.0.1:3000`));