const courseRepository = require('./../repositories/course');
const ApplicationError = require('./../../config/errors/ApplicationError');

exports.listCourse = async (type) => {
    try {
      if (type) {
        const course = await courseRepository.getListCourseByType(type);
        return course;
      } else {
        const course = await courseRepository.getListCourse();
        return course;
      }
    } catch (error) {
      throw new ApplicationError(`Failed to retrieve the list of course: ${error.message}`, 500);
    }
  };

exports.createCourse = async (payload) => {
    try {
      const course = await courseRepository.createCourse(payload);
      return course;
    } catch (error) {
      throw new ApplicationError(`Failed to add a new course: ${error.message}`, 500);
    }
  };

exports.updateCourseById = async (id, payload) => {
    try {
      const [_, data] = await courseRepository.update(id,payload);
      return data;
    } catch (error) {
      throw new ApplicationError(`Failed to update course by ID: ${error.message}`, 500);
    }
  };

  exports.getCourseById = async (id) => {
    try {
      const course = await courseRepository.findByPk(id);
      if (!course) {
        throw new ApplicationError("Course not found", 404);
      }
      return course;
    } catch (err) {
      throw new ApplicationError(`Failed to get course by ID: ${err.message}`, 500);
    }
  };

  exports.deleteCourseById = async (id,userId) => {
    try {
     const course =  await courseRepository.destory(id);
     return course;
    } catch (err) {
      throw new ApplicationError(`Failed to delete course by ID: ${err.message}`, 500);
    }
  };