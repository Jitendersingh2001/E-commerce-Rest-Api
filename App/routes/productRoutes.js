const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getcategory,
} = require("../controllers/productController");
//////////////////////////////////////////////
router.route("/products").get(getProducts).post(createProduct);
router
  .route("/products/:id")
  .get(getProduct)
  .delete(deleteProduct)
  .put(updateProduct);
router.route("/categories").get(getcategory);
//////////////////////////////////////////////
//export
module.exports = router;
