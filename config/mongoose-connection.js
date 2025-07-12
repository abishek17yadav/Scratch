const mongoose = require("mongoose");


// mongoose.connect("mongodb://127.0.0.1:2701/scratch") 
// means - laptop pe mongodb se connect karo
//lekin agar host ho haya toh work nahi hoga


mongoose.connect("mongodb://127.0.0.1:2701/scratch") 
.then(function(){
    console.log("connected with database")

})
.catch(function(err){
    console.log(err)

})


module.exports= mongoose.connection;
//gives whole control to database catch/connection

