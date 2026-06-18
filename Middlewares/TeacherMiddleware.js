const AuthSchema = require("../Models/Auth_Schema");

const TeacherMiddleware =async (req, res, next) =>{
  req.user = await AuthSchema.findById(req.user.id);
  if(req.user.role !== "teacher"){
    return res.status(403).json({ message: "Access Denied Please sign in as a teacher" });
  }
  next();
}