const { Router } = require("express");

const routes = Router();
const tempDB = [];

routes.post("/book", (req, res) => {
  const { title, author, publicationYear } = req.body;
  tempDB.push({ title, author, publicationYear });

  const myRes = tempDB[0];
  res.json({
    newBook: myRes,
  });
});

routes.get("/book", (req, res) => {
  res.json({
    book_list: tempDB,
  });
});

module.exports = routes;
