import { Cars, User } from "../models/index.js";

const findAll = async () => {
    try {
        return await Cars.findAll({ include: [{
            model: User,
            attributes: ["id", "name"],
            as: "created"
        },
        {
            model: User,
            attributes: ["id", "name"],
            as: "updated"
        },
        {
            model: User,
            attributes: ["id", "name"],
            as: "deleted"
        }],
        attributes: { exclude: ["createdBy", "updatedBy", "deletedBy" ]}
        });
    } catch (err) {
        console.error(err.message);
    }
    
    // return await Cars.findAll({ include: {
    //     model:User, attributes:["name"], as: "created"
    // }});
}

const GetListByCategory = async (type) => {
    return await Cars.findAll({ where: { type } });
}

const CreateData = async (payload, userId) => {
    return await Cars.create({...payload, createdBy: userId});
}

const findByPk = async (id) => {
    return await Cars.findByPk(id, { include: [{
        model: User,
        attributes: ["id", "name"],
        as: "created"
    },
    {
        model: User,
        attributes: ["id", "name"],
        as: "updated"
    },
    {
        model: User,
        attributes: ["id", "name"],
        as: "deleted"
    }],
    attributes: { exclude: ["createdBy", "updatedBy", "deletedBy" ]},
});
}

const update = async (req, payload, userId) => {
    const data = req;
    data.set(payload);
    data.set({updatedBy: userId});
    return await data.save();
}

const destroy = async (id) => {
    return await Cars.destroy({ where: { id }});
}

export default {
    findAll,
    GetListByCategory,
    CreateData,
    findByPk,
    update,
    destroy
}