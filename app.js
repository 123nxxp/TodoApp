const bodyParser = require("body-parser");
const express = require("express") ;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))

let items = ["Buy Food", "Eat Food", "Cook Food"] ; 

app.get("/", function(req, res){

    let today = new Date();
    let currentDay = today.getDay() ;
    var day = "" ;

    
    let options = {
        weekday: "long" ,
        day : "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options) ;

    res.render("list", {kindOfDay : day, newListItems : items});
})

app.post("/", function(req, res){
    item = req.body.newItem ;
    items.push(item) ;
    // console.log(item) ;
    // res.render("list", {newListItem : item} ); //will not work bcz it will render kindofday and newlistitem is not their
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("server is running at 3000");
})

