const bodyParser = require("body-parser");
const express = require("express") ;
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))

const items = ["Buy Food", "Eat Food", "Cook Food"] ; 
const workitems = [] ;

app.get("/", function(req, res){

    let day = date.getDate();

    res.render("list", {listTitle : day, newListItems : items});
})



app.post("/", function(req, res){
    let item = req.body.newItem ;

    if(req.body.list === "Work"){
        workitems.push(item);
        res.redirect("/work");
    }else{
        items.push(item) ;
        res.redirect("/");
    }
    
    // console.log(item) ;
    // res.render("list", {newListItem : item} ); //will not work bcz it will render kindofday and newlistitem is not their
    
})

app.get("/work", function(req, res){
    res.render("list", {listTitle : "Work List", newListItems : workitems} );
})


// app.post("/work", function(req, res){
//     let item = req.body.newItem ;
//     workitems.push(item);
//     res.redirect("/work");
// })

app.listen(3000, function(){
    console.log("server is running at 3000");
})

