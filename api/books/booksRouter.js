const express = require('express');
const Books = require('./booksHelpers');
const router = express.Router();


// Get All Books
router.get('/', (req, res) => {
    Books.find()
        .then(books => {
            res.status(200).json(books);
        })
        .catch(err => res.send(err));
})


// Get All Books by User
router.get('/byuser/:id', (req, res) => {
    let { id } = req.params;
    Books.findByUserId(id)
        .then(books => {
            res.status(200).json(books);
        })
        .catch(err => res.status(500).json(err));
})


// Post a New Book
router.post('/', (req, res) => {
    Books.add(req.body)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


// Update a Book
router.put('/:id', (req, res) => {
    let { id } = req.params;

    Books.update(id, req.body)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
             res.status(400).json(error)
        });
});

module.exports = router;