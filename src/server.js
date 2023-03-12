const express = require("express");
const routes = require("./routes/routes");

const app = express();
app.use(express.json());

const bookData = function (req, res, next) {
  console.log('is my middleware')
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
