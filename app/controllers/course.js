const courseService = require("../services/course");

const list = async (req, res) => {
    try {
        const { type } = req.query;
        const data = type ? await courseService.findAll({ type }) : await courseService.findAll();
        res.status(200).json({
            status: "OK",
            message: "success",
            data
        });
    } catch (error) {
        res.status(error.statuscode || 500).json({
            status: "FAIL",
            message: error.message,
        });
    }
};

const create = async (req, res) => {
    try {
        const body = req.body;
        const data = await courseService.create(body);
        res.status(201).json({ status: "OK", message: "Success", data });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: "FAIL",
            message: error.message,
        });
    }
};

const update = async (req, res) => {
    try {
        const { body } = req;
        
        const data = await courseService.update(req.course, body);
        res.status(201).json({ message: "Data was updated successfully.", data });
    } catch (err) {
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message
        });
    }
};

const findAndSetById = async (req, res, next) => {
    try {
        const { id } = req.params;
        req.course = await courseService.findByPk(id);
        next();
    } catch (error)  {
        res.status(error.statusCode || 500).json({
            status: "FAIL",
            message: error.message,
        });
    }
};

const destroyById = async (req, res) => {
    try {
        const { id } = req.course;
        await courseService.destroy({ id });
        res.json({ status: "OK", message: "Deleted successfully." }, req.course);
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: "FAIL",
            message: error.message,
        });
    }
};

const detail = (req, res) => {
    res.json({ status: "OK", message: "Success", data: req.course });
};


module.exports = {
    findAndSetById,
    destroyById,
    list,
    create,
    update,
    detail
};
