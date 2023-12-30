const { UserCourse } = require("../models/index.js");

/**
* Filter the user course with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function findAll(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await UserCourse.findAll({ where: filter, raw: true });
}

async function create(body) {
    return await UserCourse.create(body);
}

/**
* Filter the course with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function findOne(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await UserCourse.findOne({ where: filter });
}

/**
* Filter the user course with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function destroy(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await UserCourse.destroy({ where: filter })
}

async function findByPk(id) {
    return await UserCourse.findByPk(id);
}

module.exports = {
    findAll,
    create,
    findOne,
    destroy,
    findByPk
}