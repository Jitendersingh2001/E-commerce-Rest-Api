const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "please add the name"],
    },
    productDesc: {
      type: String,
      required: [true, "please add the description"],
    },
    productCategory: {
      type: String,
      required: [true, "please add the category"],
    },
    productPrice: {
      type: Number,
      required: [true, "please add the price"],
    },
    productQuantity: {
      type: Number,
      required: [true, "please add the price"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "products",
  }
);
module.exports = mongoose.model("product", productSchema);
