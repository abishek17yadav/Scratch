const mongoose = require("mongoose");

const config = require('config');
const dbgr = require('debug')("development:mongoose");


// ("cacha:cachi"); --kuch bhi likh sakte ho..
// ("development:mongoose"); -- because of this jab tak app .env(envirenment variable) set up nahi karoge tab tak kuch bhi print naho go on the console not even connected to database or anything

// mongoose.connect("mongodb://127.0.0.1:2701/scratch") 
// means - laptop pe mongodb se connect karo
//lekin agar host ho haya toh work nahi hoga


mongoose.connect(`${config.get("MONGODB_URI")}/scratch`) 
.then(function(){
    dbgr("connected with database")
    // console.log("connected to database")

})
.catch(function(err){
    console.log(err)

})


module.exports= mongoose.connection;
//gives whole control to database catch/connection

