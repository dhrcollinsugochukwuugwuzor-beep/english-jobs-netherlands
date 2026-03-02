const express = require('express');
const router = express.Router();

// GET user profile
router.get('/profile/:id', (req, res) => {
  res.json({ message: `Get user ${req.params.id} profile` });
});

// PUT update user profile
router.put('/profile/:id', (req, res) => {
  res.json({ message: `Update user ${req.params.id} profile` });
});

// GET employer profile
router.get('/employer/:id', (req, res) => {
  res.json({ message: `Get employer ${req.params.id}` });
});

module.exports = router;