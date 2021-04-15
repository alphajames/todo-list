const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const app = express();

let items = [];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(process.env.PORT ||3000, function(){
  console.log("server started port 3000");
});

app.get("/", function(req,res){
  let day = date.getDate();
  res.render("index", {
    kindofDay:day,
    newListItems:items
  });
});

app.post("/", function(req,res){
  let newItems = req.body.newItem;
  items.push(newItems);
  res.redirect("/");
});
