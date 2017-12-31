var express = require("express"),
    app = express(),
    bodyParser = require("body-parser")
    
    
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("landing");
})

app.get("/projects",function(req,res){
    res.render("projects");
})

app.get("/essays",function(req,res){
    res.render("essays");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening");
})