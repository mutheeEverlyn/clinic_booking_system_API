const express = require('express');
const router = express.Router();
const db = require('../db');

// ➕ Link a treatment to an appointment
router.post('/', (req, res) => {
  const { appointment_id, treatment_id } = req.body;
  const query = 'INSERT INTO appointment_treatments (appointment_id, treatment_id) VALUES (?, ?)';
  db.query(query, [appointment_id, treatment_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Treatment linked to appointment' });
  });
});

// 📋 Get all appointment-treatment links
router.get('/', (req, res) => {
  const query = `
    SELECT at.appointment_id, at.treatment_id, t.name, t.description
    FROM appointment_treatments at
    JOIN treatments t ON at.treatment_id = t.treatment_id
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
