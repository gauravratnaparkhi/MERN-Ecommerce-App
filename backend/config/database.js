const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      family: 4,
    })
    .then((data) => {
      console.log(`MongoDB connected to server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB:", error);
      process.exit(1);
    });
};

module.exports = connectToDatabase;
