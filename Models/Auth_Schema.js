const mongoose = require("mongoose");

const AuthSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,

  },
  password:{
    type:String,
    required:true,
  },
  phone:{
    type:Number,
    
    length:10,
    
  },
  otp:{
    type:String,
    
  },
  role:{
    type:String,
    enum:["student","teacher","admin"],
    default:"student",
  },
  

})
  


module.exports=mongoose.model("Auth",AuthSchema)