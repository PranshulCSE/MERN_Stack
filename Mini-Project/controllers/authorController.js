const Author = require('../models/Author');

// Create Author
const createAuthor = async (req, res, next) => {
    try {
        const { name, email, biography, birthDate } = req.body;

        const author = await Author.create({
            name,
            email,
            biography,
            birthDate,
        });

        res.status(201).json({
            success: true,
            message: 'Author created successfully',
            data: author,
        });
    } catch (error) {
        next(error);
    }
};

// Get All Authors
const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find();

        res.status(200).json({
            success: true,
            message: 'Authors fetched successfully',
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};

// Get Single Author
const getSingleAuthor = async (req, res, next) => {
    try {
        const { id } = req.params;

        const author = await Author.findById(id);

        if (!author) {
            return res.status(404).json({
                success: false,
                message: 'Author not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Author fetched successfully',
            data: author,
        });
    } catch (error) {
        next(error);
    }
};

// Update Author
const updateAuthor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, biography, birthDate } = req.body;

        const author = await Author.findByIdAndUpdate(
            id,
            { name, email, biography, birthDate },
            { new: true, runValidators: true }
        );

        if (!author) {
            return res.status(404).json({
                success: false,
                message: 'Author not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Author updated successfully',
            data: author,
        });
    } catch (error) {
        next(error);
    }
};

// Delete Author
const deleteAuthor = async (req, res, next) => {
    try {
        const { id } = req.params;

        const author = await Author.findByIdAndDelete(id);

        if (!author) {
            return res.status(404).json({
                success: false,
                message: 'Author not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Author deleted successfully',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createAuthor,
    getAllAuthors,
    getSingleAuthor,
    updateAuthor,
    deleteAuthor,
};
