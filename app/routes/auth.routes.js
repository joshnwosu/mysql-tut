const { signupValidation } = require("../config/vaildation.config");

module.exports = (app) => {
  const auth = require("../controllers/auth.controller");
  var router = require("express").Router();

  router.post("/login", auth.login);
  router.post("/register", signupValidation, auth.register);
  app.use("/api/auth", router);
};
