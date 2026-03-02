'use strict';

const express = require('express');
const router = express.Router();

// Register
router.post('/register', (req, res) => {
  res.json({ message: 'User registration' });
});

// Login
router.post('/login', (req, res) => {
  res.json({ message: 'User login' });
});

// Logout
router.post('/logout', (req, res) => {
  res.json({ message: 'User logout' });
});

module.exports = router;