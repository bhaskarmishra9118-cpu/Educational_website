const express = require("express");
const router = express.Router();
const { createRequest, teacherRespond, uploadVideoSolution } = require("../Controllers/LiveSession");
const { AuthMiddleware } = require("../Middlewares/AuthMiddleware");

router.post("/request", AuthMiddleware, createRequest);
router.post("/request/:sessionId/respond", AuthMiddleware, teacherRespond);
router.post("/request/:sessionId/video", AuthMiddleware, uploadVideoSolution);

module.exports = router;