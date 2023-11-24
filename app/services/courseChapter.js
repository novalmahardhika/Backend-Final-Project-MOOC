const ApplicationError = require('../../config/errors/ApplicationError')
const repoChapter = require('../repositories/courseChapter')

const findAll = async () => {
  try {
    const chapters = await repoChapter.findAll()

    return chapters
  } catch (error) {
    throw new ApplicationError(
      `Failed to retrieve the list of course chapters : ${error.message}`,
      500
    )
  }
}

const findByPk = async (_id) => {
  try {
    const chapter = await repoChapter.findByPk(_id)

    if (!chapter) throw new ApplicationError(`chapter Id is not found`, 404)

    return chapter
  } catch (error) {
    throw new ApplicationError(
      `Failed to get course by ID: ${error.message}`,
      500
    )
  }
}

const create = async (payload) => {
  try {
    const chapter = await repoChapter.create(payload)

    return chapter
  } catch (error) {
    throw new ApplicationError(
      `Failed to add a new course: ${error.message}`,
      500
    )
  }
}

const update = async (id, payload) => {
  try {
    return repoChapter.update(id, payload)
  } catch (error) {
    throw new ApplicationError(`Failed to update data. ${error.message}`, 500)
  }
}

const destroy = async (id) => {
  return await repoChapter.destroy(id)
}

module.exports = { findAll, findByPk, create, update, destroy }
