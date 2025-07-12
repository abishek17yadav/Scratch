const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
fullname: String ,
email :String,
password : String,
cart :{
    type : Array,
    default:[],
},
isamdin:  Boolean,
orders :{
    type :Array,
    default:[],
},
contact : Number,
picture :String,

})

const userModel= mongoose.model ("user" ,userSchema);

module.exports=userModel;
