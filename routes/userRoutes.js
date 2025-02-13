const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/', getUsers); // Get all users
router.get('/:id', getUserById); // Get single user
router.post('/', createUser); // Create user
router.put('/:id', updateUser); // Update user
router.delete('/:id', deleteUser); // Delete user

module.exports = router;
