const { UserCourseProgress } = require("../models/index.js");

/**
* Filter the data with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function findAll(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await UserCourseProgress.findAll({ where: filter });
}

async function create(body) {
    return await UserCourseProgress.create(body);
}

/**
* Filter the data with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function findOne(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await UserCourseProgress.findOne({ where: filter });
}

/**
* Filter the data with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function destroy(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await UserCourseProgress.destroy({ where: filter })
}

async function findByPk(id) {
    return await UserCourseProgress.findByPk(id);
}

module.exports = {
    findAll,
    create,
    findOne,
    destroy,
    findByPk
}