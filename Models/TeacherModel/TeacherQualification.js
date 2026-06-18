const mongoose = require('mongoose');
const Teacher=require('./Auth_Schema')
const TeacherQualificationSchema = new mongoose.Schema({
   Teacher:{
    type: mongoose.Types.ObjectId,
    ref: 'Teacher',
    required: true,
    unique: true,
   },
   Degree:{
    type: String,
    required: true,
   },
    Institution:{
    type: String,
   },
   certification:{
    type: String,
   },
   YearOfExperience:{
    type: Number,
    required: true,
   },
   Specilization:{
    type: String,
    required: true,
   },
   VerificationStatus:{
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending',
   },
   rejectionReason:{
    type: String,
    default: null,
   },
  
})
mondule.exports = mongoose.model('TeacherQualification', TeacherQualificationSchema);