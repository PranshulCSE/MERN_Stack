const Book = require('../models/Book');

// Create Book
const createBook = async (req, res, next) => {
    try {
        const { title, isbn, genre, publishedDate, price, author } = req.body;

        // Validation
        if (!title || !isbn || !genre || !price || !author) {
            return res.status(400).json({
                success: false,
                message: 'Title, ISBN, Genre, Price, and Author are required',
            });
        }

        const book = await Book.create({
            title,
            isbn,
            genre,
            publishedDate,
            price,
            author,
        });

        // Populate author details
        await book.populate('author');

        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: book,
        });
    } catch (error) {
        next(error);
    }
};

// Get All Books
const getAllBooks = async (req, res, next) => {
    try {
        const { genre } = req.query;

        // Filter by genre if provided
        let filter = {};
        if (genre) {
            filter.genre = genre;
        }

        const books = await Book.find(filter).populate('author');

        res.status(200).json({
            success: true,
            message: 'Books fetched successfully',
            data: books,
        });
    } catch (error) {
        next(error);
    }
};

// Get Single Book
const getSingleBook = async (req, res, next) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id).populate('author');

        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book fetched successfully',
            data: book,
        });
    } catch (error) {
        next(error);
    }
};

// Update Book
const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, isbn, genre, publishedDate, price, author } = req.body;

        const book = await Book.findByIdAndUpdate(
            id,
            { title, isbn, genre, publishedDate, price, author },
            { new: true, runValidators: true }
        ).populate('author');

        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: book,
        });
    } catch (error) {
        next(error);
    }
};

// Delete Book
const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;

        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
        });
    } catch (error) {
        next(error);
    }
};

// Search Books by Title
const searchBooks = async (req, res, next) => {
    try {
        const { title } = req.query;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required for search',
            });
        }

        const books = await Book.find({
            title: { $regex: title, $options: 'i' },
        }).populate('author');

        res.status(200).json({
            success: true,
            message: 'Books searched successfully',
            data: books,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
    searchBooks,
};
