const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    try {
      const users = await connection('users').select('*');
      return res.json(users);
    } catch (err) {
      return res.json(err.message);
    }
  },

  async create(req, res) {
    try {
      const { name, email, phone, city, state, url = null, org_flag } = req.body;

      const id = crypto.randomBytes(4).toString('hex');

      await connection('users').insert({
        id,
        name,
        email,
        phone,
        city,
        state,
        url,
        org_flag
      });

      return res.json({ id });
    } catch (err) {
      return res.json(err.message);
    }
  }
}