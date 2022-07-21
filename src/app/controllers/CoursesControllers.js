const Course = require("../model/Courses");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class CoursesControllers {
  //[get}  /courses/:slug
  show(req, res, next) {
    // res.send(req.params.slug);
    // res.send("detail");
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.json(course);
      })
      .catch(next);
  }
  //[get}  /courses/create
  create(req, res, next) {
    res.render("courseCreate");
  }
  //[post}  /courses/create
  store(req, res, next) {
    // res.json(req.body);
    res.setHeader("Content-Type", "application/json");
    console.log(req.body);
    // res.send("success");
    // const course = new Course({ name: "nai hoc moi" });
    const course = new Course(req.body);
    course.save().then(() => res.redirect("/courses"));
  }
}

module.exports = new CoursesControllers();
