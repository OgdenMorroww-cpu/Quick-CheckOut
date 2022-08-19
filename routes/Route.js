const express = require("express");
const router = express.Router();
const UserAccount = require("../model/Accounts");

router.get("/userAccount", async (req, res) => {
  try {
    const data = await UserAccount.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/reqister", async (req, res) => {
  const data = new UserAccount({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAdress: req.body.emailAdress,
    password: req.body.password,
  });
  try {
    const userData = await data.save();
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
