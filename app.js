const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true})); //linking bodyparser with express
app.set('view engine', 'ejs');

var tasks = [];

app.get("/", function(req, res){
  const today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month : 'long'
  };

  var formattedDate = today.toLocaleDateString("en-US", options);
  res.render('list', {dayName : formattedDate, taskList : tasks});
});



app.post("/", function(req, res){
  console.log(req.body.taskName);
  tasks.push(req.body.taskName);  // appends submitted task to tasks list
  res.redirect("/");
});


app.listen(8000,function(){
  console.log("Server started on port 3000");
});
