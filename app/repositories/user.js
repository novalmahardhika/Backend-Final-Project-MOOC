const { User } = require("../models/index.js");
const bcrypt = require("bcrypt");

async function findAll() {
    return await User.findAll({ attributes: { exclude: ["encryptedPassword"] } });
}

async function create(body) {
    return await User.create(body);
}

async function findUserByEmail(email) {
    return await User.findOne({ where: { email }});
}

async function checkPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

async function findByPk(id) {
    return await User.findByPk(id);
}

module.exports = {
    findAll,
    create,
    findUserByEmail,
    checkPassword,
    findByPk
}