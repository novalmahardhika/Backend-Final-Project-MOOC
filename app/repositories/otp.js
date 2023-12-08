const { Otp } = require("../models/index.js");

/**
* Filter the otp with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function findAll(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await Otp.findAll({ where: filter });
}

async function create(body) {
    return await Otp.create(body);
}

/**
* Filter the otp with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function findOne(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await Otp.findOne({ where: filter });
}

/**
* Filter the otp with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function destroy(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await Otp.destroy({ where: filter })
}

async function findByPk(id) {
    return await Otp.findByPk(id);
}

module.exports = {
    findAll,
    create,
    findOne,
    destroy,
    findByPk
}