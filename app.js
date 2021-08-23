const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true})); //linking bodyparser with express
app.use(express.static('public'));
app.set('view engine', 'ejs');

var tasks = [];
var workTasks = [];

app.get("/", function(req, res){
  const today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month : 'long'
  };

  var formattedDate = today.toLocaleDateString("en-US", options);
  res.render('list', {listTitle : formattedDate, taskList : tasks});
});

app.get("/work", function(req, res){
  res.render("list", {listTitle : "Work", taskList : workTasks});
});


app.post("/", function(req, res){
  if (req.body.button == "Work"){      //identifying page of request by passing page name as a button value.
    workTasks.push(req.body.taskName); // if request is coming from work page then append in workTasks array
    res.redirect("/work");
  }else{
    tasks.push(req.body.taskName);  // appends submitted task to tasks list
    res.redirect("/");
  }
});

app.get("/about", function(req, res){
  res.render("about");
});


app.listen(8000,function(){
  console.log("Server started on port 8000");
});
