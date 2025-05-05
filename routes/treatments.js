const express = require('express');
const router = express.Router();
const db = require('../db');

// ➕ Create a treatment
router.post('/', (req, res) => {
  const { name, description } = req.body;
  const query = 'INSERT INTO treatments (name, description) VALUES (?, ?)';
  db.query(query, [name, description], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Treatment created', treatment_id: results.insertId });
  });
});

// 📋 Get all treatments
router.get('/', (req, res) => {
  db.query('SELECT * FROM treatments', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
