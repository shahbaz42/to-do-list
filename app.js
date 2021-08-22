const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  const date = new Date();
  var day = date.getDay() ;
  if (day==0 || day==6){
    dayType = "Weekend";
    res.render('list', {kindOfDay : dayType});
  }else{
    dayType = "Not A Weekend";
    res.render('list', {kindOfDay : dayType});
  }
});

app.listen(8000,function(){
  console.log("Server started on port 3000");
});
