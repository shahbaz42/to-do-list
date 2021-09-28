const express = require("express");
const bodyParser = require("body-parser");
const date = require (__dirname + "/date.js");
const mongoose = require("mongoose"); //requiring mongoose
const app = express();

app.use(bodyParser.urlencoded({extended: true})); //linking bodyparser with express
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/todolistDB");  

const itemsSchema = {    // schema for items
  name : String
};

const Item  =  mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name : "Welcome to your to do list"
})

const item2 = new Item({
  name : "Hit the + button to add task"
})

const defaultItems = [item1, item2];

app.get("/", function(req, res){
  Item.find(function(err, results){
    if (results.length === 0){
      Item.insertMany(defaultItems, function(err){
        if(err){
          console.log(err);
        }else{
          console.log("Successfully inserted an array");
        }
      })
      res.render('list', {listTitle : date.getDate(), taskList : results});
    }
    res.render('list', {listTitle : date.getDate(), taskList : results});
  });
});

app.get("/work", function(req, res){
  res.render("list", {listTitle : "Work", taskList : workTasks});
});


app.post("/", function(req, res){
  if (req.body.button == "Work"){      //identifying page of request by passing page name as a button value.
    workTasks.push(req.body.taskName); // if request is coming from work page then append in workTasks array
    res.redirect("/work");
  }else{
    const itemToAdd = new Item({
      name : req.body.taskName
    });
    itemToAdd.save();
    res.redirect("/");
  }
});

app.get("/about", function(req, res){
  res.render("about");
});


app.listen(8000,function(){
  console.log("Server started on port 8000");
});
