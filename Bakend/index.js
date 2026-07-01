const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const connectDB = require('./Models/Database');
const authRoute = require('./Routes/authRoute');
const liveRoute = require('./Routes/LiveRoute');

connectDB();

app.use(cors({
  origin : "http://localhost:5173",
  credentials: true,
  

 }
));
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.headers, req.method, req.url);
  res.send(`<h1>Welcome to the Server</h1>`);
});

app.use("/api/auth", authRoute);
app.use("/api/live", liveRoute);

const Port = process.env.PORT || 2001;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});