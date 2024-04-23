const User = require("../schema/User");

//POST Method
const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      primaryPhoneNumber,
      secondaryPhoneNumber,
      password,
      address,
    } = req.body;

    const creatingUser = new User({
      firstName,
      lastName,
      email,
      primaryPhoneNumber,
      secondaryPhoneNumber,
      password,
      address,
    });
    await creatingUser.save();
    res.status(201).json(creatingUser);
  } catch (error) {
    console.log("There is an Error: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

//GET Method
const getUser = async (req, res) => {
  try {
    const userDeatils = await User.find();
    res.status(200).json(userDeatils);
  } catch (error) {
    console.log("There is an Error: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// GET SIngle User
const singleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).json({ message: "User Not Found" });
    res.status(200).json(user);
  } catch (error) {
    console.log("There is an Error: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// PUT Method
const updateUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      primaryPhoneNumber,
      secondaryPhoneNumber,
      password,
      address,
    } = req.body;
    const myUser = await User.findByIdAndUpdate(req.body._id, {
      firstName,
      lastName,
      email,
      primaryPhoneNumber,
      secondaryPhoneNumber,
      password,
      address,
    });

    if (!myUser) return res.status(400).json({ message: "User Not Found" });
    res.status(200).json(myUser);
  } catch (error) {
    console.log("There is an Error: ", error);
    res.status(500).json({ message: "server Error" });
  }
};

//Delete Method

const deleteUSer = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.log("There is an Error: ", error);
    res.status(500).json({ messsage: "Server Error" });
  }
};

module.exports = { createUser, getUser, singleUser, updateUser, deleteUSer };
