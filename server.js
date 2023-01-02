const express=require ("express");
const app= express();
const path=require ("path");

app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.listen(8866,function () {
    console.log("app listen at 8866");
});




























// const express = require ("express");
// const app= express();

// const path = require('path');

// app.use(express.static(path.join( __dirname,  'public')));

// app.get("/",function(req,res){
//     res.sendFile({root:__dirname}+ "./public/index.html");
// });

// // app.get("/customer",function(req,res){
// //     res.sendFile( {root:__dirname}+ "./public/customer.html");
// // });

// // app.get("/employee",function(req,res){
// //     res.sendFile({root:__dirname}+"./public/employee.html");
// // });

// app.listen(8025,function(){
//     console.log("the server is running is at port 8025");
// });

















































// const express= require ("express");
// const app=express();

// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/public/index.html")
// });

// app.listen(8000,function(){
//     console.log("the port is running on port 3000");
// });