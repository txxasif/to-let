const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err.message);
    console.log("something went wrong");
    //process.exit(1);
  }
};

module.exports = connectDB;
