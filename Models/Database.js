const mongoose = require('mongoose');

const connectDB= async()=>{
  try{
    
 const connect = mongoose.connect(process.env.DATABASE_URI);
 if(connect){
  console.log(`Database is successfully connected`)
 }
}
 catch(err){
  console.log(`some error occured while connecting to database${err.message}`)
 }
}
module.exports=connectDB;