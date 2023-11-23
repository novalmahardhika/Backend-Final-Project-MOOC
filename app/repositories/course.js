const { Course } = require("../models");

exports.getListCourse = () => {
    return Course.findAll();
  };
  
exports.getListCourseByType = (type) => {
    return Course.findAll({ where: { type } });
  };


  exports.createCourse = (payload) => {
    return Course.create( payload);
  };

  exports.update = async (id, payload) => {
    return Course.update( payload , { where: { id }, returning: true })
  };


  exports.findByPk = (id) => {
    return Course.findByPk(id);
}

exports.destory = (id) => {
  return Course.destroy({ where: { id } });
}