const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../Controllers/AuthControllers");
const  AuthMiddleware  = require("../Middlewares/AuthMiddleware");

const {StudentMiddleware} =require("../Middlewares/StudentMiddleware")

router.post("/register",   register);
router.post("/login",  login);
//router.get("/profile/student", AuthMiddleware, StudentMiddleware, getProfile);

module.exports = router;