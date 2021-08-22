const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const date = new Date();

app.get("/", function(req, res){
  var day = date.getDay() ;
  if (day==0 || day==6){
    res.send("Today is a weekend!!");
  }else{
    res.send("Today is a work day!!");
  }
});

app.listen(8000,function(){
  console.log("Server started on port 3000");
});
