const { v4: uuidv4 } = require("uuid");
const { Router } = require("express");

const routes = Router();
const tempDB = [];

routes.post("/book", (req, res) => {
  const { title, author, publicationYear } = req.body;
  const newBook = {
    id: uuidv4(),
    title,
    author,
    publicationYear,
  };

  tempDB.push(newBook);

  res.json(newBook);
});

routes.get("/book", (req, res) => {
  res.json({
    book_list: tempDB,
  });
});

routes.get("/book/:id", (req, res) => {
  const bookId = req.params.id;
  const book = tempDB.filter((book) => book.id === bookId);

  res.json(book[0]);
});

module.exports = routes;
