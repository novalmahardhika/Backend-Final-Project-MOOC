const courseService = require("../services/course");

const list = async (req, res) => {
  try {
    const { type } = req.query;
    const data = await courseService.listCourse(type);
    res.status(200).json({ status: "OK", message: "success", data });
  } catch (error) {
    res.status(error.statuscode || 500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const image = req.image ;
    const body = req.body;
    body.image = image;
    const data = await courseService.createCourse(body);
    res.status(201).json({ status: "OK", message: "Success", data });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const body = req.body;
    const { id: courseId } = req.course;
    body.image = req.image;
    const data = await courseService.updateCourseById(courseId, body);
    res.status(201).json({ status: "OK", message: "Success", data });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

const findAndSetById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const course = await courseService.getCourseById(id);
    req.course = course;
    next();
  } catch (error)  {
    res.status(error.statusCode || 500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

const destroy = async (req, res) => {
    try {
      const id = req.course.id;
      await courseService.deleteCourseById(id);
      res.json({ status: "OK", message: "successfully deleted" });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        status: "Fail",
        message: error.message,
      });
    }
  };

const detail = (req, res) => {
    res.json({ status: "OK", message: "success", data: req.course });
  };
  

module.exports = {
  findAndSetById,
  destroy,
  list,
  create,
  update,
  detail,
};
