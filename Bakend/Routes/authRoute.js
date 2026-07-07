const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../Controllers/AuthControllers");
const { AuthMiddleware } = require("../Middlewares/AuthMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", AuthMiddleware, getProfile);

module.exports = router;