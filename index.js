var express=require('express');
var app=express();
var bodyParser = require('body-parser');


 //configure body-parser for express
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());
 //
 
 var server=app.listen(process.env.PORT ||7000,function(){
    console.log("server has started");
});
// routes was here
var routes=require('./routes.js');
routes(app);