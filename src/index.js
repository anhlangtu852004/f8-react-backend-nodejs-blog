const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();

//http logger trong console log
// app.use(morgan("combined"));

//static
app.use(express.static(path.join(__dirname, "public")));

//midle waee
app.use(express.urlencoded({ extended: true })); //dung middle ware dde lay du lieu trong body gui tu client bang form, thang express tich hop san urlencoded, khong thoi phai dung body-parser
app.use(express.json()); //dung middle ware dde lay du lieu gui tu client bang java jay php hay javascript

//template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "\\resources\\views"));

console.log(path.join(__dirname, "\\resources\\views"));
const port = 3001;

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body);
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
