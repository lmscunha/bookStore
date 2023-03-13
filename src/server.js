const express = require("express");
const routes = require("./routes/routes");

const app = express();
app.use(express.json());

const bookData = function (req, res, next) {
  const {title, author, publicationYear} = req.body

  const parsedTitle = title
  const parsedAuthor = author
  const parsedPY = +publicationYear
  const validBookData = typeof parsedTitle  === 'string' && typeof parsedAuthor === 'string' && parsedPY > 0

  if(!validBookData ) {
    return res.status(403).json({message: 'Invalid book data'})
  }

  next()
}

app.use(bookData)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log("Bookstore Open!");
});
