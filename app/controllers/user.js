const userService = require("../services/user.js");

const findAll = async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        const data = await userService.findAll();
        if (!data) {
            res.json({ status: "FAIL", message: "Data not found."});
            return;
        }
        res.json({ status: "OK", message: "Success", data });
    } catch (err) {
        res.status(err.statusCode || 400).json({ status: "FAIL", message: err.message});
    }
}

const register = async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        const ret = await userService.create(req.body);
        res.status(201).json({ status: "OK", message: "Data was created successfully.", data: ret });
    } catch (err) {
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message
        });
    }
}

const registerAdmin = async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        const ret = await userService.create(req.body, true);
        res.status(201).json({ status: "OK", message: "Data was created successfully.", data: ret });
    } catch (err) {
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message
        });
    }
}

const login = async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        const credentials = req.body;
        const user = await userService.checkUser(credentials);

        res.json({
            status: "OK",
            message: "Login successfully.",
            data: user
        })
    } catch (err) {
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message
        });
    }
}

const currentUser = async (req, res) => {
    res.json({
        status: "OK",
        message: "Login successfully.",
        data: req.user
    })
}

module.exports = {
    findAll,
    register,
    registerAdmin,
    login,
    currentUser
}