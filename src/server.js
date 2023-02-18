const { json } = require("express");
const express = require("express");
const routes = require("./routes/routes");

const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log("Bookstore Open");
});
