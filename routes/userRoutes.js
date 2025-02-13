const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/', getUsers); // Get all users
router.get('/:id', getUserById); // Get single user

// Example POST route
router.post('/', (req, res) => {
    const { Your_name, Your_lover_name } = req.body;
    if (!Your_name || !Your_lover_name) {
        return res.status(400).json({ message: 'Bad Request: Missing required fields' });
    }
    res.json({ message: `Hello ${Your_name}, wish your love successful with ${Your_lover_name}` });
});

router.put('/:id', updateUser); // Update user
router.delete('/:id', deleteUser); // Delete user

module.exports = router;
