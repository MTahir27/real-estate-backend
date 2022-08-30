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
const PropertyModal = require("./Models/Property");

app.get("/", (request, response) => {
  response.send("Wellcome to Real Estate Serve");
});

// Auth Crud
app.post("/registerUser", async (request, response) => {
  const user = request.body;
  const newUser = new UserModal(user);
  await newUser.save();
  response.json(user);
});

app.get(`/getUser/:firebaseId`, (request, response) => {
  const id = request.params.firebaseId;
  UserModal.find({ firebaseId: id }, (error, user) => {
    if (error) {
      response.json(error);
    } else {
      response.json(user);
    }
  });
});

// Property Crud
app.post("/addProperty", async (request, response) => {
  const property = request.body;
  const newProperty = new PropertyModal(property);
  await newProperty.save();
  response.json(property);
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server Run on ${process.env.PORT || 8000} Port.`);
});
