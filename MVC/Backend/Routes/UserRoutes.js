// User Routes - Defines API endpoints for user operations
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// GET all users
router.get('/', userController.getAllUsers);

// GET single user by ID
router.get('/:id', userController.getUserById);

// CREATE new user
router.post('/', userController.createUser);

// UPDATE user (PATCH)
router.patch('/:id', userController.updateUser);

// DELETE user
router.delete('/:id', userController.deleteUser);

module.exports = router;
