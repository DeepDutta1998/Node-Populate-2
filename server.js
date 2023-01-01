const express=require('express');
require('dotenv').config();
const path=require('path');
const mongoose=require('mongoose');
const flash=require('connect-flash');
const session=require('express-session')
const app=express();
const port=process.env.PORT;
app.set("view engine","ejs");
app.set("views","views");
mongoose.set('strictQuery', true);
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({
    extended:true
}));
const homeRoute=require('./route/home.route');
app.use(homeRoute)
app.use(session({
    secret:'rehhslkdh',
    saveUninitialized:true,
    resave:true
}));
app.use(flash());

const dbDriver="mongodb+srv://lofi:bLZgeMO7Qs872Qqx@cluster0.rmvujxb.mongodb.net/populate";
mongoose.connect(dbDriver,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    app.listen(port,()=>{
        console.log("DB connected");
        console.log(`server started@ http://localhost:${port}`);
    });
}).catch((err)=>{
   console.log("DB not connceted");
   console.log(err);
})