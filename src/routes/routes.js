const { v4: uuidv4 } = require("uuid");
const { Router } = require("express");

const routes = Router();
const tempDB = [];

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

routes.put("/book/:id", (req, res) => {
  const { title, author, publicationYear } = req.body;
  const bookId = req.params.id;
  const book = tempDB.filter((book) => book.id === bookId);
  const newBook = {
    id: uuidv4(),
    title,
    author,
    publicationYear,
  };
  // TODO: ADD REPLACE FUNCTION to update book
  tempDB.push(newBook);

  res.json(newBook);
});

module.exports = routes;
