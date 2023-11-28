const { CourseChapter,courseChapterModule } = require('../models/index.js')

/**
* Filter the course with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
const findAll = async (filter) => {
  if (typeof filter !== "object" && filter != null) return new Error('filter is not an object')
  return await CourseChapter.findAll({ where: filter } )
}

const findByPk = async (id) => {
  const chapter = await CourseChapter.findByPk(id)

  return chapter
}

const create = async (payload) => {
  const chapter = await CourseChapter.create(payload)
  return chapter
}

const update = async (id, payload) => {
  const [_, chapter] = await CourseChapter.update(payload, {
    where: { id },
    returning: true,
  })
  return chapter
}

const destroy = async (id) => {
  await CourseChapter.destroy({ where: { id: id } })
}

module.exports = { findAll, findByPk, create, update, destroy }
