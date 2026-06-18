const AuthSchema = require("../Models/Auth_Schema");

const StudentMiddleware =async (req, res, next) =>{
  req.user = await AuthSchema.findById(req.user.id);
  if(req.user.role !== "student"){
    return res.status(403).json({ message: "Access denied" });
  }
  next();
}