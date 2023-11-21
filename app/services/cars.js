import ApplicationError from "../../config/errors/ApplicationError.js";
import Repo from "../repositories/cars.js";

const GetAllData = async (type) => {
    try {
        if (type) {
            const data = await Repo.GetListByCategory(type);
            return data;
        }
    
        const data = await Repo.findAll();
        return data;
    } catch (err) {
        throw new ApplicationError(`Failed to get the data. ${err.message}`);
    }
}

const CreateData = async (payload, userId) => {
    try {
        const result = await Repo.CreateData(payload, userId);
        return result
    } catch (err) {
        throw new ApplicationError(`Failed to create data. ${err.message}`, 500);
    }
}

const GetDataByID = async (id) => {
    try {
        const data = await Repo.findByPk(id);
        if (!data) {
            throw new ApplicationError(`Data not found`, 404);
        }
        return data;
    } catch (err) {
        throw new ApplicationError(`Failed to get the data. ${err.message}`, err.statusCode || 500);
    }
}

const UpdateData = async (req, payload, userId) => {
    try {
        // const data = req;
        // data.set(payload);
        // data.set({updatedBy: userId});
        // return await data.save();
        return await Repo.update(req, payload, userId);
    } catch (err) {
        throw new ApplicationError(`Failed to update data. ${err.message}`, 500);
    }
}

const DeleteData = async (req, id, userId) => {
    try {
       return Promise.all([Repo.destroy(id, userId), Repo.update(req, {deletedBy: userId}, null)]);
    } catch (err) {
        throw new ApplicationError(`Failed to delete data. ${err.message}`, 500);
    }
}

export default {
    GetAllData,
    CreateData,
    GetDataByID,
    UpdateData,
    DeleteData
}