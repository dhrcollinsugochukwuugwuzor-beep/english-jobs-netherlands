const express = require('express');
const router = express.Router();

// GET applications for user
router.get('/', (req, res) => {
  res.json({ message: 'Get user applications' });
});

// POST apply for job
router.post('/', (req, res) => {
  res.json({ message: 'Apply for job' });
});

// PUT update application status
router.put('/:id', (req, res) => {
  res.json({ message: `Update application ${req.params.id}` });
});

module.exports = router;