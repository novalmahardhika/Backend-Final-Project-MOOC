const courseService = require('../services/course')
const courseProgressService = require('../services/userCourseProgress')

const appendCourseInformation = async (course, user = "guest") => {
    const chapterLen = Object.keys(course.chapters).length;
    let totalModule = 0, totalDuration = 0;
    
    for(let i = 0; i < chapterLen; i++) {
        const moduleLen = Object.keys(course.chapters[i].modules).length;
        totalDuration += course.chapters[i].duration;

        for(let j = 0; j < moduleLen; j++) {
            totalModule++;
            if (user != "guest") {
                const progress = await courseProgressService.findOne({ userId: user.id, moduleId: course.chapters[i].modules[j].id, done: true })
                if (progress) course.chapters[i].modules[j].dataValues.done = progress.done;
            }
        }
    }

    const { chapters } = course.dataValues;
    delete course.dataValues.chapters;

    return { ...course.dataValues, totalModule, totalDuration, chapters };
}

const deleteDetail = (course) => {
    const chapterLen = Object.keys(course.chapters).length;
    for(let i = 0; i < chapterLen; i++) {
        const moduleLen = Object.keys(course.chapters[i].modules).length;
        for(let j = 0; j < moduleLen; j++) {
            if (i == 0) continue;
            delete course.chapters[i].modules[j].dataValues.id
            // delete course.chapters[i].modules[j].dataValues.video
        }
    }
    return course
}

const list = async (req, res) => {
    try {
        const isFilter = Object.keys(req.query).length;
        const data = (isFilter) ? await courseService.findAll({ ...req.query }) : await courseService.findAll()
        const dataLen = Object.keys(data).length;

        for(let i = 0; i < dataLen; i++) {
            data[i].dataValues = await appendCourseInformation(data[i])
            delete data[i].dataValues.chapters;
        }
        
        res.status(200).json({
            status: 'OK',
            message: 'Success',
            data,
        })
    } catch (error) {
        res.status(error.statuscode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
}

const create = async (req, res) => {
    try {
        const body = req.body
        const data = await courseService.create(body)
        res.status(201).json({ status: 'OK', message: 'Success', data })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
}

const update = async (req, res) => {
    try {
        const { body } = req
        
        const data = await courseService.update(req.course, body)
        res.status(201).json({ status: 'OK', message: 'Data was updated successfully.', data })
    } catch (err) {
        res.status(err.statusCode).json({
            status: 'FAIL',
            message: err.message,
        })
    }
}

const findAndSetById = async (req, res, next) => {
    try {
        const { id } = req.params
        req.course = await courseService.findByPk(id)
        next()
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
}

const destroyById = async (req, res) => {
    try {
        const { id } = req.course
        await courseService.destroy({ id })
        res.json({ status: 'OK', message: 'Deleted successfully.', data: req.course })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAIL',
            message: error.message
        })
    }
}

const detail = async (req, res) => {
    let course = await appendCourseInformation(req.course, req.user)
    if (req.user == "guest") course = deleteDetail(course)
    
    res.json({ status: 'OK', message: 'Success', data: course })
}

module.exports = {
    findAndSetById,
    destroyById,
    list,
    create,
    update,
    detail
}
