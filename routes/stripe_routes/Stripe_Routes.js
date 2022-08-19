const express = require("express");
const path = require("path");
const stripeRouter = express();
const secret_key = require("../../stripe_api_modules/Stripe_Api_Module");
const publishAbleKey = require("../../stripe_api_modules/Stripe_publisk_key");

const stripes = require("stripe")(secret_key);
stripeRouter.set(express.json());
stripeRouter.set(express.urlencoded({ extended: false }));

stripeRouter.set("views", path.join(__dirname, "views"));
stripeRouter.set("view engine", "ejs");

stripeRouter.get("/", (req, res) => {
  res.render("Home", {
    key: publishAbleKey,
  });
});

stripeRouter.post("/payment", (req, res) => {
  stripes.customers.create({
    email: req.body.stripeEmail,
  });
});

module.exports = stripeRouter;
