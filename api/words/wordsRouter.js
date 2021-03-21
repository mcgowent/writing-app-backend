const express = require('express');
const Words = require('./wordsHelpers');
const router = express.Router();


// Get All Words
router.get('/', (req, res) => {
    Words.find()
        .then(words => {
            res.status(200).json(words);
        })
        .catch(err => res.send(err));
})


// Get All Words by User
router.get('/byuser/:id', (req, res) => {
    let { id } = req.params;
    Words.findByUserId(id)
        .then(words => {
            res.status(200).json(words);
        })
        .catch(err => res.status(500).json(err));
})


// Get All Words by Book
router.get('/bybook/:id', (req, res) => {
    let { id } = req.params;
    Words.findByBookId(id)
        .then(words => {
            res.status(200).json(words);
        })
        .catch(err => res.status(500).json(err));
})

// Post a New Word
router.post('/', (req, res) => {
    Words.add(req.body)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


// Update a Word
router.put('/:id', (req, res) => {
    let { id } = req.params;
    let { wordcount } = req.body;

    Words.update(id, wordcount)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


module.exports = router;