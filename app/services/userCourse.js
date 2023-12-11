const ApplicationError = require('../../config/errors/ApplicationError')
const userCourseRepo = require('../repositories/userCourse')


const findAll = async () => {
  try {
    const data = await userCourseRepo.findAll();
    return data
  } catch (error) {
    throw new ApplicationError(`Failed to retrieve the list of course. ${error.message}`, 500);
  }
}


module.exports = { findAll }