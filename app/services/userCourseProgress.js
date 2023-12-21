const userCourseProgressRepo = require('../repositories/userCourseProgress');
const ApplicationError = require('../../config/errors/ApplicationError');

exports.findAll = async (filter) => {
    try {
        return await userCourseProgressRepo.findAll(filter);
    } catch (error) {
        throw new ApplicationError(`Failed to retrieve the data list. ${error.message}`, 500);
    }
};

exports.create = async (payload) => {
    try {
        return await userCourseProgressRepo.create(payload);
    } catch (error) {
        throw new ApplicationError(`Failed to add a new data. ${error.message}`, 500);
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
        const course = await userCourseProgressRepo.findByPk(id);
        if (!course) throw new ApplicationError("Data not found", 404);
        
        return course;
    } catch (err) {
        throw new ApplicationError(`Failed to get data by ID. ${err.message}`, 500);
    }
};

exports.findOne = async (filter) => {
    try {
        return await userCourseProgressRepo.findOne(filter);
    } catch (error) {
        throw new ApplicationError(`Failed to retrieve the data. ${error.message}`, 500);
    }
}

exports.destroy = async (id) => {
    try {
        return await userCourseProgressRepo.destroy(id);
    } catch (err) {
        throw new ApplicationError(`Failed to delete data. ${err.message}`, 500);
    }
};