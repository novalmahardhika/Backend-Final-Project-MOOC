const { CourseChapter } = require('../models/index.js')

const findAll = async () => {
  const chapter = await CourseChapter.findAll()
  return chapter
}

const findById = async (_id) => {
  const chapter = await CourseChapter.findByPk(_id)

  return chapter
}

const create = async (payload) => {
  const chapter = await CourseChapter.create(payload)
  return chapter
}

const update = async (_id, payload) => {
  const [_, chapter] = await CourseChapter.update(payload, {
    where: { id: _id },
    returning: true,
  })
  return chapter
}

const destroy = async (_id) => {
  await CourseChapter.destroy({ where: { id: _id } })
}

module.exports = { findAll, findById, create, update, destroy }
