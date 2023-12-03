const courseRepository = require('./../repositories/course');
const ApplicationError = require('./../../config/errors/ApplicationError');

exports.findAll = async (filter) => {
    try {
        return await courseRepository.findAll(filter);
    } catch (error) {
        throw new ApplicationError(`Failed to retrieve the list of course. ${error.message}`, 500);
    }
};

exports.create = async (payload) => {
    try {
        return await courseRepository.create(payload);
    } catch (error) {
        throw new ApplicationError(`Failed to add a new course. ${error.message}`, 500);
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
        throw new ApplicationError(`Failed to get course by ID. ${err.message}`, 500);
    }
};

exports.destroy = async (id) => {
    try {
        return await courseRepository.destroy(id);
    } catch (err) {
        throw new ApplicationError(`Failed to delete data. ${err.message}`, 500);
    }
};