// Using Node.js `require()`
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js")
const app = express();

// middlewhereconfig
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server updated");
});


mongoose
  .connect(
    ""
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
