const { v4: uuidv4 } = require("uuid");
const { Router } = require("express");
const { bookDataParsed } = require("./middleware");

const routes = Router();
let tempDB = [];

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

routes.post("/book", bookDataParsed, (req, res) => {
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

routes.put("/book/:id", bookDataParsed, (req, res) => {
  const { title, author, publicationYear } = req.body;
  const bookId = req.params.id;

  let bookUpdated = "";

  tempDB.forEach((book) => {
    if (book.id === bookId) {
      book.title = title;
      book.author = author;
      book.publicationYear = publicationYear;

      bookUpdated = book;
    }
  });

  res.json(bookUpdated);
});

routes.delete("/book/:id", (req, res) => {
  const bookId = req.params.id;

  let bookIndex = 0;
  tempDB.forEach((book) => {
    if (book.id === bookId) {
      bookIndex = tempDB.indexOf(book);
    }
  });

  tempDB.splice(bookIndex, 1);

  return res.status(204).json({ message: "book deleted" });
});

module.exports = routes;
