const Course = require("../model/Courses");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class SiteControllers {
  //[get}  /home
  index(req, res, next) {
    // Course.find({}, function (err, course) {
    //   if (!err) {
    //     res.json(course);
    //   } else {
    //     res.status(400).json({ err: "erroi roi" });
    //   }
    // });
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch((error) => next(error));
    // res.render("home");
  }

  //[get}  /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteControllers();
