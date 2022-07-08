module.exports = (app) => {
  const books = require("../controllers/book.controller");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", books.create);
  router.get("/all", books.findAll);
  router.put("/:id", books.update);
  router.get("/:id", books.findOne);
  app.use("/api/book", router);
};
