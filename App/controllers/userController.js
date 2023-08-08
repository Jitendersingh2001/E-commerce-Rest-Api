const asyncHandler = require("express-async-handler"); //to handle error automatically
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
////////////////////////////////////////////
//GET USERS
////////////////////////////////////////////
const getUser = asyncHandler(async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
});
////////////////////////////////////////////
//GET A SPECIFIC USERS
////////////////////////////////////////////
const getSingleUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404);
      throw new Error("not found");
    }
    res.json(user);
  } catch (err) {
    res.status(500);
    throw new Error("Object id might be wrong");
  }
});
////////////////////////////////////////////
//CREATE USERS(registration)
////////////////////////////////////////////
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Please fill all fields" });
  }
  // const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password,
  });
  res.status(201).json(newUser);
});

////////////////////////////////////////////
//DELETE A SPECIFIC USER
////////////////////////////////////////////
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const userToBeDelete = await User.findById(req.params.id);
    if (!userToBeDelete) {
      res.status(404);
      throw new Error("not found");
    }
    await userToBeDelete.deleteOne();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500);
    throw new Error("Object id might be wrong");
  }
});
////////////////////////////////////////////
//UPDATE  A SPECIFIC USERS
////////////////////////////////////////////
const updateUser = asyncHandler(async (req, res) => {
  try {
    const userToBeUpdate = await User.findById(req.params.id);
    if (!userToBeUpdate) {
      res.status(404);
      throw new Error("not found");
    }
    const upatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(upatedUser);
  } catch (err) {
    res.status(500);
    throw new Error("Object id might be wrong");
  }
});
/////////////////////////////////////////////
//export
/////////////////////////////////////////////
module.exports = {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
};
