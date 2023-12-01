// userRoutes.js
const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id_users', UserController.getUserById); // Add this route if not already present
router.post('/', UserController.createUser);
router.put('/:id_users', UserController.updateUser); // Update route
router.delete('/:id_users', UserController.deleteUser); // Delete route

module.exports = router;
