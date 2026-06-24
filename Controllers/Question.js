const express = require("express");
const Question = require("../Models/StudentModel/Question");

exports.createQuestions = async (req, res) => {
  const { Subject, TopicName, Title, Description, questiontype, status, price } = req.body;
  try {
    if (!Subject, TopicName, Title, Description, price, questiontype) {
      res.status(400).json({
        success: false,
        message: "Failed to create question please enter all required fields",
      });
    }
    const newQuestion = Question.create({
      Student: req.user._id,
      Subject,
      TopicName,
      Title,
      Description,
      questiontype,
      status,
      price

    });

    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleQuestion=(req, res)=> {
  
}