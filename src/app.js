const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const user = require("./models/userschema");
const app = express();

const port = process.env.PORT|| 3000;






 const htmlpath = path.join(__dirname, '../public');

 const templatePath = path.join(__dirname, "../templates/views");
 const partialspath= path.join(__dirname, "../templates/partials");

// middleware from public
// The app. use() method mounts or puts the specified middleware functions at the specified path.
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use("/jq", express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use(express.static(htmlpath))

// schema
app.use(express.urlencoded({extended:false}))


app.set("views", templatePath);
hbs.registerPartials(partialspath);


// The app.set() function is used to assigns the setting name to value.
app.set("view engine", "hbs")


// routing
// app. get() is a function that tells the server what to do when a get request at the given route is called.
// res.render() function is used to render a view and sends the rendered HTML string to the client. 

app.get("/", (req,res) => {
    res.render("index")
})



app.post("/contact", async(req,res) => {
    try {
        const userdata= new user(req.body);
        await userdata.save();
        res.status(201).render("index");
    } catch(err){
        res.status(500).send(err);
    }
})



app.listen(port, () => {
    console.log(`server is running on ${port}`);
})





// app.use(express.urlencoded({extended:false}))

// app.post("./contact", async(req,res) => {
//     try {
//         res.send(req.body)
//     } catch(err){
//         res.status(500).send(err);
//     }
// })