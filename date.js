
exports.getDate = getDate;

function getDate(){
    const today = new Date();
    const currentDay = today.getDay() ;
    var day = "" ;
    
    
    let options = {
        weekday: "long" ,
        day : "numeric",
        month: "long"
    }
    
    var day = today.toLocaleDateString("en-US", options) ;
    return day;
}

exports.getDay = getDay;

function getDay(){
    const today = new Date();
    const currentDay = today.getDay() ;
    var day = "" ;
    
    
    let options = {
        weekday: "long" ,
    }
    
    var day = today.toLocaleDateString("en-US", options) ;
    return day;
}

// console.log(module.exports);