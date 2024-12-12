const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// GET /books - Retrieve all books
router.get('/books', booksController.getAllBooks);

// GET /books/genre/:genre - Filter books by genre
router.get('/books/genre/:genre', booksController.getBooksByGenre);

module.exports = router;