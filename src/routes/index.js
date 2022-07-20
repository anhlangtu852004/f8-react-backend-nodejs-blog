const newsRouter = require("./news.router");

function routes(app) {
  app.use("/news", newsRouter);

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
}

module.exports = routes;
