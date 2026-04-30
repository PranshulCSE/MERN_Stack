const express = require('express');
const {
    createAuthor,
    getAllAuthors,
    getSingleAuthor,
    updateAuthor,
    deleteAuthor,
} = require('../controllers/authorController');

const router = express.Router();

// Create Author
router.post('/', createAuthor);

// Get All Authors
router.get('/', getAllAuthors);

// Get Single Author
router.get('/:id', getSingleAuthor);

// Update Author
router.put('/:id', updateAuthor);

// Delete Author
router.delete('/:id', deleteAuthor);

module.exports = router;
