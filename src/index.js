const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();

//http logger trong console log
app.use(morgan("combined"));

//static
app.use(express.static(path.join(__dirname, "public")));

//template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "\\resources\\views"));

console.log(path.join(__dirname, "\\resources\\views"));
const port = 3001;

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
