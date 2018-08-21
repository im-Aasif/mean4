const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

/**
 * POST /users/register
 */
router.post('/register', function (req, res) {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, function (err, user) {
        if (err) {
            res.json({
                success: false,
                msg: 'failed to register user.'
            });
        } else {
            res.json({
                success: true,
                msg: 'user registered'
            });
        }
    })
});

/**
 * POST /users/authenticate
 */
router.post('/authenticate', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    User.getUserByUsername(username, function (err, user) {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: 'user not found'
            });
        }
        User.comparePassword(password, user.password, function (err, isMatch) {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 3 weeks in seconds
                });
                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Wrong password'
                });
            }
        })
    })
});

/**
 * GET /users/profile
 */
router.get('/profile', passport.authenticate('jwt', { session: false }), function (req, res) {
    res.json({
        success: true,
        msg: 'Profile found',
        user: req.user
    });
});

module.exports = router;