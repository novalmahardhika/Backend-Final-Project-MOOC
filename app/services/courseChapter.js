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

const findById = async (_id) => {
  try {
    const chapter = await repoChapter.findById(_id)

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

const update = async (_id, payload) => {
  try {
    const existId = await repoChapter.findById(_id)

    if (!existId) throw new ApplicationError(`chapter Id is not found`, 404)

    const chapter = repoChapter.update(_id, payload)
    return chapter
  } catch (error) {
    throw new ApplicationError(`Failed to update data. ${error.message}`, 500)
  }
}

const destroy = async (_id) => {
  const existId = await repoChapter.findById(_id)

  if (!existId) throw new ApplicationError(`chapter Id is not found`, 404)

  await repoChapter.destroy(_id)
}

module.exports = { findAll, findById, create, update, destroy }
