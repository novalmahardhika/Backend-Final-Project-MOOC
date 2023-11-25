const courseService = require('../services/courseChapterModule')

const findAll = async (req, res) => {
    try {
        const { body } = req;
        const data = body ? await courseService.findAll(body) : await courseService.findAll();
        res.status(200).json({
            status: 'OK',
            message: 'Success',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAIL',
            message: error.message,
        });
    }
};

const findSetById = async (req, res, next) => {
    try {
        const { id } = req.params
        
        req.courseChapterModule = await courseService.findByPk(id)
        next()
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
}  

const create = async (req, res) => {
    try {
        const payload = req.body
        const courseModule = await courseService.create(payload)
        
        res.json({ status: 'OK', message: 'Success', data: courseModule })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
}

const update = async (req, res) => {
    try {
        const payload = req.body
        const courseModule = await courseService.update(req.courseChapterModule.id, payload)
        res.json({ status: 'OK', message: 'Success', data: courseModule })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
}

const destroy = async (req, res) => {
    try {
        const { id } = req.courseChapterModule
        await courseService.destroy({ id })
        
        res.json({ status: 'OK', message: 'Success', data: req.courseChapterModule })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
}

const detail = (req, res) => {
    res.json({ status: "OK", message: "Success", data: req.courseChapterModule });
};


module.exports = {
    findAll,
    findSetById,
    create,
    update,
    destroy,
    detail,
};
