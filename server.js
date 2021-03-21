const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const UsersRouter = require('./api/users/usersRouter.js');
const WordsRouter = require('./api/words/wordsRouter.js');
const BooksRouter = require('./api/books/booksRouter.js');

const server = express();

server.use(cors())
server.use(helmet())
server.use(express.json());

server.use('/api/users', UsersRouter);
server.use('/api/words', WordsRouter);
server.use('/api/books', BooksRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' })
})

module.exports = server;