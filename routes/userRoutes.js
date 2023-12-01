// userRoutes.js
const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getUserById); // Add this route if not already present
router.post('/', UserController.createUser);
router.put('/:userId', UserController.updateUser); // Update route
router.delete('/:userId', UserController.deleteUser); // Delete route

module.exports = router;
