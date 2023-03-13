const bookDataParsed = function (req, res, next) {
  const { title, author, publicationYear } = req.body;

  const parsedTitle = title;
  const parsedAuthor = author;
  const parsedPY = +publicationYear;
  const validBookData =
    typeof parsedTitle === "string" &&
    typeof parsedAuthor === "string" &&
    parsedPY > 0;

  if (!validBookData) {
    return res.status(403).json({ message: "Invalid book data" });
  }

  next();
};

module.exports = { bookDataParsed };
