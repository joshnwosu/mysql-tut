module.exports = (app) => {
  const books = require("../controllers/book.controller");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", books.create);
  router.get("/all", books.findAll);
  router.put("/:id", books.update);
  router.get("/:id", books.findOne);
  router.delete("/:id", books.delete);
  // Delete all Books
  router.delete("/", books.deleteAll);
  app.use("/api/book", router);
};
