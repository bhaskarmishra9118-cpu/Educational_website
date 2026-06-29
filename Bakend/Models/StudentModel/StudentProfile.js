const mongoose=require(mongoose)

const StudentProfileSchema=new mongoose.Schema({
  cityName:{
    type:String,
    required:true
  },
  stateName:{
    type:String,
    required:true
  },
  phoneno:{
    type:mongoose.Types.Number,
    ref:'Auth_Schema',
    required:true
  },
  profileImg:{
    type:String,
    required:true
  },

})

module.exports=mongoose.model("StudentProfile",StudentProfileSchema)