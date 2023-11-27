const { courseChapterModule } = require('../models/index.js')

/**
* Filter the course with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
const findAll = async (filter) => {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object')
    return await courseChapterModule.findAll({ where: filter })
}

const findByPk = async (id) => {
    const courseModule = await courseChapterModule.findByPk(id)
    return courseModule
}
const create = async (payload) => {
    const courseModule = await courseChapterModule.create(payload)
    return courseModule
}

const update = async (id, payload) => {
    const [_, courseModule] = await courseChapterModule.update(payload, {
        where: { id },
        returning: true,
    })
    return courseModule
}

/**
* Filter the course with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function destroy(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await courseChapterModule.destroy({ where: filter })
}

module.exports = { findAll, findByPk, create, update, destroy }