const ApplicationError = require("../../config/errors/ApplicationError.js");
const UserRepo = require("../repositories/user.js");
const Auth = require("./auth.js");

const findAll = async () => {
    try {
        const data = await UserRepo.findAll();
        return data;
    } catch (err) {
        throw new ApplicationError(`Failed to get the data. ${err.message}`);
    }
}

const create = async (payload, isAdmin) => {
    try {
        const { email, password, name, address, phoneNumber } = payload;

        if (!email || !password) {
            throw new ApplicationError(`Please input email and password.`, 400);
        }

        const encryptedPassword = await Auth.encryptPassword(password);
        const user = await UserRepo.create({
            email,
            encryptedPassword,
            name,
            address,
            phoneNumber,
            role: isAdmin ? 'ADMIN': 'MEMBER'
        });
        return user;
    } catch (err) {
        throw new ApplicationError(`Failed to create data. ${err.message}`, err.statusCode || 500);
    }
}

const update = async (req, payload) => {
    try {
        const data = req;
        data.set(payload);
        return await data.save();
    } catch (err) {
        throw new ApplicationError(`Failed to update data. ${err.message}`, 500);
    }
}

const checkUser = async (credentials) => {
    try {
        const { email, password } = credentials;
        if (!email || !password) {
            throw new ApplicationError(`Please input email and password.`, 400);
        }

        const user = await UserRepo.findUserByEmail(email);
        const checkedPassword = await UserRepo.checkPassword(password, user.encryptedPassword);

        if (!user || !checkedPassword) {
            throw new ApplicationError(`Email or password is invalid.`, 404);
        }

        const token = Auth.createToken({ id: user.id });
        const ret = { ...user.dataValues, token };
        return ret;
    } catch (err) {
        throw new ApplicationError(`${err.message}`, err.statusCode || 500);
    }
}

module.exports = {
    findAll,
    create,
    update,
    checkUser
}