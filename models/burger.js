const orm = require('../config/orm');

const burger = {
  getAllBurgers: async () => {
    try {
      const data = await orm.selectAll('burgers');
      return data;
    } catch (error) {
      throw error;
    };
  },
  insertBurger: async (burgerObj) => {
    try {
      const data = await orm.insertOne('burgers', burgerObj);
      return data;
    } catch (error) {
      throw error;
    };
  },
  updateBurger: async (newObj, id) => {
    try {
      const data = await orm.updateOne('burgers', newObj, id);
      return data;
    } catch (error) {
      throw error;
    }
  },
  deleteBurger: async (id) => {
    try {
      const data = await orm.deleteWhere('burgers', id)
    } catch (error) {
      throw error;
    }
  }
};

module.exports = burger;