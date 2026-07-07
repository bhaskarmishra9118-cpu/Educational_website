const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log(`Database is successfully connected`);
  } catch (err) {
    console.error(`Error connecting to database: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;