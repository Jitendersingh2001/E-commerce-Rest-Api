const express = require("express");
const connectDB = require("./config/database.js");
const errorHandling = require("./App/middlewares/errorHandler.js");
const dotenv = require("dotenv").config(); // to accesss env file
const port = process.env.PORT || 5000; // accessing port value from env file
const app = express();
//mongodb connection
connectDB();
// middleware for parsing json and urlencoded data in request body
app.use(express.json());
//routes for product and list of categories
app.use("/E-commerce", require("./App/routes/productRoutes.js"));
app.use("/E-commerce/user", require("./App/routes/userRoutes.js"));
app.use(errorHandling);
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
