const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    try {

      const projects = await connection('projects')
        .join('users', 'users.id', '=', 'projects.user_id')
        .select([
          'projects.*',
          'users.name',
          'users.email',
          'users.phone',
          'users.city',
          'users.state',
          'users.url'
        ]);

      return res.json(projects);
    } catch (err) {
      return res.json(err.message);
    }
  },

  async create(req, res) {
    try {
      const { title, description, role } = req.body;
      const user_id = req.headers.authorization;

      const [id] = await connection('projects').insert({
        title,
        description,
        role,
        user_id
      });

      return res.json({ id });
    } catch (err) {
      return res.json(err.message);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user_id = req.headers.authorization;

      const project = await connection('projects')
        .where('id', id)
        .select('user_id')
        .first();

      if (project.user_id !== user_id) {
        return res.status(401).json({ error: 'Operation denied.' });
      }

      await connection('projects').where('id', id).delete();

      return res.status(204).send();
    } catch (err) {
      return res.json(err.message);
    }
  }
}