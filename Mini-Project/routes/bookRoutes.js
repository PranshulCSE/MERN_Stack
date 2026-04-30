const express = require('express');
const {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
    searchBooks,
} = require('../controllers/bookController');

const router = express.Router();

// Search Books
router.get('/search', searchBooks);

// Create Book
router.post('/', createBook);

// Get All Books
router.get('/', getAllBooks);

// Get Single Book
router.get('/:id', getSingleBook);

// Update Book
router.put('/:id', updateBook);

// Delete Book
router.delete('/:id', deleteBook);

module.exports = router;
