require("dotenv").config();
const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.DB_URL);
  console.log("Database Connection Successfull");
} catch (error) {
  (error) => console.log(error);
}

const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const UserModal = require("./Models/Users");

app.get("/", (request, response) => {
  response.send("Wellcome to Real Estate Serve");
});

app.post("/registerUser", async (request, response) => {
  const user = request.body;
  const newUser = new UserModal(user);
  await newUser.save();
  response.json(user);
});

app.get("/getUser", (request, response) => {
  const { firebaseId } = request.body;
  console.log("Firebase Id =>" + firebaseId);
  console.log("Respose: =>" + request.body);
  UserModal.find({ firebaseId: firebaseId }, (error, result) => {
    if (error) {
      response.json(error);
    } else {
      response.json(result);
    }
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server Run on ${process.env.PORT || 8000} Port.`);
});
