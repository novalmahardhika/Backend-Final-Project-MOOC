const courseRepository = require('./../repositories/course');
const ApplicationError = require('./../../config/errors/ApplicationError');

exports.findAll = async (type) => {
    try {
        return courseRepository.findAll(type);
    } catch (error) {
        throw new ApplicationError(`Failed to retrieve the list of course: ${error.message}`, 500);
    }
};

exports.create = async (payload) => {
    try {
        const course = await courseRepository.create(payload);
        return course;
    } catch (error) {
        throw new ApplicationError(`Failed to add a new course: ${error.message}`, 500);
    }
};

exports.update = async (req, payload) => {
    try {
        const data = req;
        data.set(payload);
        return await data.save();
    } catch (err) {
        throw new ApplicationError(`Failed to update data. ${err.message}`, 500);
    }
};

exports.findByPk = async (id) => {
    try {
        const course = await courseRepository.findByPk(id);
        if (!course) throw new ApplicationError("Course not found", 404);
        
        return course;
    } catch (err) {
        throw new ApplicationError(`Failed to get course by ID: ${err.message}`, 500);
    }
};

exports.destroy = async (id) => {
    // try {
    //     const course =  await courseRepository.destory({ id });
    //     return course;
    // } catch (err) {
    //     throw new ApplicationError(`Failed to delete course by ID: ${err.message}`, 500);
    // }
    try {
        return courseRepository.destroy(id);
    } catch (err) {
        throw new ApplicationError(`Failed to delete data. ${err.message}`, 500);
    }
};