const express = require('express');
const router = express.Router();

// GET all jobs
router.get('/', (req, res) => {
  res.json({ message: 'Get all jobs' });
});

// GET single job
router.get('/:id', (req, res) => {
  res.json({ message: `Get job ${req.params.id}` });
});

// POST create job (employer only)
router.post('/', (req, res) => {
  res.json({ message: 'Create job' });
});

// PUT update job
router.put('/:id', (req, res) => {
  res.json({ message: `Update job ${req.params.id}` });
});

// DELETE job
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete job ${req.params.id}` });
});

module.exports = router;