const ApplicationError = require('./../../config/errors/ApplicationError');
const courseRepository = require('./../repositories/courseChapterModule');

exports.findAll = async () => {
    try {
        return courseRepository.findAll();
    } catch (error) {
        throw new ApplicationError(`Failed to retrieve the list of  course chapters: ${error.message}`, 500);
    }
};

exports.findByPk = async (_id) => {
    try {
      const courseModule = await courseRepository.findByPk(_id)
  
      if (!courseModule) throw new ApplicationError(`course Id is not found`, 404)
  
      return courseModule
    } catch (error) {
      throw new ApplicationError(
        `Failed to get course by ID: ${error.message}`,
        500
      )
    }
}

exports.create = async (payload) => {
    try {
        const chapter = await courseRepository.create(payload)
    
        return chapter
      } catch (error) {
        throw new ApplicationError(
          `Failed to add a new course: ${error.message}`,
          500
        )
      }
}

exports.update = async (id, payload) => {
    try {
      return courseRepository.update(id, payload)
    } catch (error) {
      throw new ApplicationError(`Failed to update data. ${error.message}`, 500)
    }
  }

  exports.destroy = async (id) => {
    await courseRepository.destroy({ where: { id: id } })
}