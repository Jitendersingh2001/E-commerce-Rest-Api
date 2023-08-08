const asyncHandler = require("express-async-handler"); //to handle error automatically
const product = require("../Models/productModel");
/////////////////////////////////////////////
//get all products
/////////////////////////////////////////////
const getProducts = asyncHandler(async (req, res) => {
  const allProducts = await product.find();
  res.json(allProducts);
});
/////////////////////////////////////////////
//create produts
/////////////////////////////////////////////
const createProduct = asyncHandler(async (req, res) => {
  const {
    productName,
    productDesc,
    productCategory,
    productPrice,
    productQuantity,
  } = req.body;
  if (
    !productName ||
    !productDesc ||
    !productCategory ||
    !productPrice ||
    !productQuantity
  ) {
    return res.status(400).json({ error: "Please fill all fields" });
  }
  const newProduct = await product.create({
    productName,
    productDesc,
    productCategory,
    productPrice,
    productQuantity,
  });
  res.status(201).json(newProduct);
});
/////////////////////////////////////////////
// GET SPECIFIC PRODUCT
/////////////////////////////////////////////
const getProduct = asyncHandler(async (req, res) => {
  try {
    const newproduct = await product.findById(req.params.id);
    if (!newproduct) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.json(newproduct);
  } catch (err) {
    res.status(500);
    throw new Error("Object id might be wrong");
  }
});

/////////////////////////////////////////////
// DELETE SPECIFIC PRODUCT
/////////////////////////////////////////////
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const productToDelete = await product.findById(req.params.id);
    if (!productToDelete) {
      res.status(404);
      throw new Error("Product not found");
    }
    await productToDelete.deleteOne();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500);
    throw new Error("Object id might be wrong");
  }
});
/////////////////////////////////////////////
// DELETE SPECIFIC PRODUCT
/////////////////////////////////////////////
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const productToUpdate = await product.findById(req.params.id);
    if (!productToUpdate) {
      res.status(404);
      throw new Error("Product not found");
    }
    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500);
    throw new Error("Object id might be wrong");
  }
});
/////////////////////////////////////////////
// GET ALL THE CATEGORIES
/////////////////////////////////////////////
const getcategory = asyncHandler(async (req, res) => {
  const categories = [];
  const allProducts = await product.find();
  allProducts.forEach((e) => {
    if (!categories.includes(e.productCategory)) {
      categories.push(e.productCategory);
    }
  });
  res.json(categories);
});
/////////////////////////////////////////////
//export
/////////////////////////////////////////////
module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getcategory,
};
