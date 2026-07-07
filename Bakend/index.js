const express = require('express');
const app = express();
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const connectDB = require('./Models/Database');
const authRoute = require('./Routes/authRoute');
const liveRoute = require('./Routes/LiveRoute');
const {Server} = require('socket.io')

connectDB();

app.use(cors({
  origin: process.env.CORS_ORIGIN ||"http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Educational API</h1>");
});

app.use("/api/auth", authRoute);
app.use("/api/live", liveRoute);
app.use("/api/questions", require("./Routes/questionRoute"));

const Port = process.env.PORT || 2001;

// create HTTP server and attach socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

server.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

// expose io on app for controllers that may need to emit events
app.set('io', io);