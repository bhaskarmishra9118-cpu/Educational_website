const jwt=require("jsonwebtoken")
    const AuthMiddleware = async (req, res, next) => {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied" });
      }
      const token = authHeader.split(" ")[1];
      if (!token) return res.status(401).json({ message: "Access Denied" });
      try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        req.user._id=decoded.id;
        next();
      } catch (err) {
        res.status(401).json({ message: "Invalid Token" });
      }
    
  }
  module.exports = { AuthMiddleware }