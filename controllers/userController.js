const pool = require('../config/connection');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM users');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id_users;

    try {
      const [rows] = await pool.query('SELECT * FROM users WHERE id_users = ?', [userId]);
      if (rows.length > 0) {
        res.json(rows[0]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createUser: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const [result] = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [
        name,
        email,
        password,
      ]);

      const newUser = {
        id_users: result.insertId,
        name,
        email,
      };

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateUser: async (req, res) => {
    const userId = req.params.id_users;
    const { name, email, password } = req.body;

    try {
      const [result] = await pool.query('UPDATE users SET name=?, email=?, password=? WHERE id_users=?', [
        name,
        email,
        password,
        userId,
      ]);

      if (result.affectedRows > 0) {
        res.json({ message: 'User updated successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id_users;

    try {
      const [result] = await pool.query('DELETE FROM users WHERE id_users=?', [userId]);

      if (result.affectedRows > 0) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = UserController;