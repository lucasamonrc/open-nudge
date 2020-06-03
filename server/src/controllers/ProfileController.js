const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    try {
      const user_id = req.headers.authorization;

      const projects = await connection('projects')
        .where('user_id', user_id)
        .select('*');

      return res.json(projects);
    } catch (err) {
      return res.json(err.message);
    }
  }
}