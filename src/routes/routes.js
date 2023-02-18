const { Router } = require("express");

const routes = Router();
const tempDB = [];

routes.post("/book", (req, res) => {
  const { title, author, publicationYear } = req.body;

  tempDB.push({ title, author, publicationYear });

  console.log(tempDB[0]);
  const myRes = tempDB[0];
  res.json({
    newBook: myRes,
  });
});

module.exports = routes;
