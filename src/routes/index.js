const newsRouter = require("./news.router");
const siteRouter = require("./site.router");
const coursesRouter = require("./courses.router");

function routes(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}

module.exports = routes;
