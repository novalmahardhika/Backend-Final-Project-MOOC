const ApplicationError = require("../../config/errors/ApplicationError.js");
const UserRepo = require("../repositories/user.js");
const Auth = require("./auth.js");
const { sendMail } = require("./mailer.js");

const generateOTP = (length) => {
    let otp = "";
    for(let i = 0; i < length; i++) otp += String(Math.floor(Math.random() * 9));
    return otp;
}

const verifyAccount = async (query) => {
    const { email, otp } = query;
    const user = await UserRepo.findUserByEmail(email);
    const today = new Date();

    if (!user) throw new ApplicationError(`Failed to verify your account.`, 400);
    if (user.verified) throw new ApplicationError("Account is verified already.", 400);
    if (user.otpExpiredAt < today) throw new ApplicationError("OTP is expired.", 400);
    if (user.otp !== otp) throw new ApplicationError("OTP is invalid", 400);
    user.set({ verified: true, otpExpiredAt: null, otp: null });
    user.save();
    return user;
}

const sendOtp = async (payload) => {
    const { email } = payload;
    const user = await UserRepo.findUserByEmail(email);
    const today = new Date();

    if (user.otpExpiredAt < today) {
        const otp = generateOTP(6);
        const otpExpiredAt = new Date();
        otpExpiredAt.setMinutes(otpExpiredAt.getMinutes() + 5);
        
        user.set({ otp, otpExpiredAt })
        user.save();
    }
    
    await sendMail({ email: user.email, otp: user.otp });
}

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
        
        await sendOtp({ email });
        delete user.dataValues.verified;

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
        const { email, phoneNumber, password } = credentials;
        if (!email && !phoneNumber) throw new ApplicationError(`Please input email/phone number and password.`, 400);
        if (!password) throw new ApplicationError(`Please input your password.`, 400);

        const user = email ? await UserRepo.findOne({ email }) : await UserRepo.findOne({ phoneNumber });
        const checkedPassword = await UserRepo.checkPassword(password, user.encryptedPassword);

        if (!user || !checkedPassword) {
            throw new ApplicationError(`Email or password is invalid.`, 404);
        }

        if (!user.verified) throw new ApplicationError("Please verify your email first.", 400);

        const token = Auth.createToken({ id: user.id });
        const ret = { ...user.dataValues, token };
        return ret;
    } catch (err) {
        throw new ApplicationError(`${err.message}`, err.statusCode || 500);
    }
}

module.exports = {
    verifyAccount,
    sendOtp,
    findAll,
    create,
    update,
    checkUser
}