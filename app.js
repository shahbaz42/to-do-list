const express = require("express");
const date = require (__dirname + "/date.js");
const mongoose = require("mongoose"); //requiring mongoose
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/todolistDB");  

const itemsSchema = {    // schema for items
  name : String
};

const Item  =  mongoose.model("Item", itemsSchema);

app.get("/", function(req, res){
  Item.find(function(err, results){
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

app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
  Item.findByIdAndRemove(checkedItemId, function(err){
    if(err){
      console.log(err);
    }
  })
  res.redirect("/");
});

app.get("/about", function(req, res){
  res.render("about");
});


app.listen(8000,function(){
  console.log("Server started on port 8000");
});
