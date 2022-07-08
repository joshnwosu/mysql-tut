module.exports = (app) => {
  const books = require("../controllers/book.controller");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", books.create);
  router.get("/all", books.findAll);
  // Update a Book with id
  router.put("/:id", books.update);
  // Retrieve a sing Book wit id
  router.get("/:id", books.findOne);
  // Delete a Book with id
  router.delete("/:id", books.delete);
  // Delete all Books
  router.delete("/", books.deleteAll);
  app.use("/api/book", router);
};
