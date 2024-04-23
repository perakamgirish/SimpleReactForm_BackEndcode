const express = require("express");
const router = express.Router();
const user = require("../schema/User");
const userController = require("../controller/userControllers");

// POST Method
router.post("/Add-user", userController.createUser);

// GET Method
router.get("/All-users", userController.getUser);

// Single User
router.get("/User/:id", userController.singleUser);

// PUT Method
router.put("/update-user", userController.updateUser);

//DELETE Method
router.delete("/delete/:id", userController.deleteUSer);

module.exports = router;
