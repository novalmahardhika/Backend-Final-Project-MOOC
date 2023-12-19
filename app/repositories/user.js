const { User, Course,Notification } = require("../models/index.js");
const bcrypt = require("bcrypt");

async function findAll() {
    return await User.findAll({ attributes: { exclude: ["encryptedPassword", "otp", "otpExpiredAt", "verified"] } });
}

async function create(body) {
    return await User.create(body);
}

/**
* Filter the course with specific condition.
* [filter] - Object to specifying the condition (Ex. { id: 1 })
*/
async function findOne(filter) {
    if (typeof filter !== "object" && filter != null) return new Error('filter is not an object');
    return await User.findOne({ where: filter });
}

async function checkPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

async function findByPk(id) {
    return await User.findByPk(id, { include: [{ model: Course,through: {attributes: []}}], attributes: { exclude: ["updatedAt,createdAt","encryptedPassword", "verified"] } });
}

async function notification(id) {
    return await User.findByPk(id, { include: [{ model: Notification,as: 'notifications' ,attributes: {exclude: ['userId','updatedAt']} }], attributes: { exclude: ["id","updatedAt","createdAt", "encryptedPassword", "phoneNumber", "address", "verified"] }});
}

module.exports = {
    findAll,
    create,
    findOne,
    checkPassword,
    findByPk,
    notification
}