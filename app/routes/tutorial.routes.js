module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", tutorials.create);
  // Retrieve all Tutorials -
  // Can also be filtered by [title, description] Eg: ?search=hello
  router.get("/", tutorials.findAll);
  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);
  // Retrieve all unpublished Tutorials
  router.get("/unpublished", tutorials.findAllUnpublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  // Update a Tutorial with id
  router.put("/:id", tutorials.update);
  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);
  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);
  app.use("/api/tutorials", router);
};
