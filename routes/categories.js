const express = require("express");
const router = express.Router();
const server = require("../server");
const database = server.getPool();

router.get("/", (req, res) => {
  let resposne = {
    status: true,
  };

  database.query("select * from categories", (error, result) => {
    if (error) {
      resposne.status = false;
      resposne.message = error;
      res.send(resposne);
    }

    resposne.data = result;
    res.send(resposne);
  
  });
});

//test
router.post("/", (req, res) => {
  res.send({
    body: req.body,
    message: "Handling POST request for /product",
  });
});

router.get("/:id", (req, res) => {
  let catId = req.body;
  res.send({
    body: req.body,
    message: `Handling GET request for /product ${req.params.id},  ${catId}`,
  });
});

router.patch("/:id", (req, res) => {
  res.status(503);
  res.send({
    query: req.query,
    message: `Handling Patch request for /product ${req.params.id}`,
  });
});

module.exports = router;
