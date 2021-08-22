const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  const date = new Date();
  var day = date.getDay() ;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  res.render('list', {dayName : days[day]});
});

app.listen(8000,function(){
  console.log("Server started on port 3000");
});
