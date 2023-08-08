const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getSingleUser,
} = require("../controllers/userController");
router.route("/").get(getUser).post(createUser);
router.route("/:id").delete(deleteUser).put(updateUser).get(getSingleUser);
/////////////////////////////////////////////
//export
/////////////////////////////////////////////
module.exports = router;
