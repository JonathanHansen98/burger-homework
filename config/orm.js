const connection = require('./connection')

const orm = {
  selectAll: async (table) => {
    try {
      const query = `SELECT * from ??`;
      const data = await connection.query(query, table);
      return data;
      } catch (error) {
      throw error;
    }
  },
  insertOne: async (table, newObj) => {
    try {
      const query = `INSERT INTO ?? SET ?`;
      const data = await connection.query(query, [table, newObj]);
      return data;
      } catch (error) {
      throw error;
    }
  },
  updateOne: async (table, newObj, id) => {
    try {
      const query = `UPDATE ?? SET ? where id = ?`;
      const data = await connection.query(query,[table, newObj, id]);
      return data;
      } catch (error) {
      throw error;
    }
  },
  deleteWhere: async (table, id) => {
    const query = 'DELETE FROM ?? WHERE id = ?';
    const data = await connection.query(query, [table, id])
  }
};

module.exports = orm