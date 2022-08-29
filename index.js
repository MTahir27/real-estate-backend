require("dotenv").config();
const mongoose = require("mongoose");
try {
  mongoose.connect(
    "mongodb+srv://root:root@cluster0.hoz8xpg.mongodb.net/rea?retryWrites=true&w=majority"
  );
  console.log("Database Connection Successfull");
} catch (error) {
  (error) => console.log(error);
}
