class NewControllers {
  //[get}  /news
  index(req, res) {
    res.render("news");
  }

  //[get}  /news/:slug
  show(req, res) {
    res.send("page detail");
  }
}

module.exports = new NewControllers();
