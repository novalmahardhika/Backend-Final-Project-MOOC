const { Course,CourseChapter,courseChapterModule } = require("../models/index.js");

/**
* Filter the course with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function findAll(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await Course.findAll({ where: filter, include: [{ model: CourseChapter, as: 'chapters', include: [{ model: courseChapterModule, as: 'modules' }] }]});
}

async function create(body) {
    return await Course.create(body);
}

/**
* Filter the course with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function destroy(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await Course.destroy({ where: filter })
}

async function findByPk(id) {
    return await Course.findByPk(id, { include: [{ model: CourseChapter, as: 'chapters', include: [{ model: courseChapterModule, as: 'modules' }] }]});
}

module.exports = {
    findAll,
    create,
    destroy,
    findByPk
}