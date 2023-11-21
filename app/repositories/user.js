const { User } = require("../models/index.js");
const bcrypt = require("bcrypt");

const findAll = async () => {
    return await User.findAll({ attributes: { exclude: ["encryptedPassword"] } });
}

const create = async (body) => {
    return await User.create(body);
}

const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email }});
}

const checkPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

const findByPk = async (id) => {
    return await User.findByPk(id);
}

module.exports = {
    findAll,
    create,
    findUserByEmail,
    checkPassword,
    findByPk
}