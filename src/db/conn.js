const mongoose = require("mongoose");


mongoose.set('strictQuery',false);

// creating a database
 mongoose.connect("mongodb://127.0.0.1:27017/abhidayna", {
 useNewUrlParser: true   
 }).then(() => {
    console.log("connection sucessful");
 }).catch((err) => {
    console.log(err);
 })
