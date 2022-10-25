const express=require("express");
const app=express();
const bodyParser=require('body-parser');
const { resourceLimits } = require("worker_threads");

//when we post the data that comes from html we use urlencoded,
// extended is to post nested objects
//body-parser to read the values from webpage
app.use(bodyParser.urlencoded({extended : true}))

app.get("/",function(request,response){
    // __dirname relative path of index.html
    response.sendFile(__dirname+"/calculator.html");

})
app.post("/calculator",function(request,response){
    // __dirname relative path of index.html
    var num1=Number(request.body.num1);
    var num2=Number(request.body.num1);
    response.send("The result of the calculation is "+(num1+num2));


})
app.listen(3000,function(){
    console.log("server is starting at port 3000")
})