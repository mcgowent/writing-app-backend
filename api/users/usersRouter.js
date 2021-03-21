const express = require('express');
const Users = require('./usersHelpers');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const restricted = require('../../auth/restricted-middleware');

router.post('/register', (req, res) => {
    // let { username, password } = req.body;

    // var hash = bcrypt.hashSync(password, 8);
    // come back here later and figure out why hashing the password isn't working
    Users.add(req.body)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, pword } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            // Circle back to fix the hash
            // if (user && bcrypt.compareSync(password, user.password)) {
                console.log(user, "<- User")
            if(username === user.username && pword === user.pword) {
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: 'You cannot pass!' });
            }
        })
        .catch(error => {
            res.status(500).json({message: 'User Not Found'});
        });
});

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

// router.get('/hash', (req, res) => {
//     const name = req.query.name;

//     // hash the name
//     const hash = bcrypt.hashSync(name, 8); // use bcryptjs to hash the name
//     res.send(`the hash for ${name} is ${hash}`);
// });

module.exports = router;