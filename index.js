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

const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server Run on ${process.env.PORT || 8000} Port.`);
});
