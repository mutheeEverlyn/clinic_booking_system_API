import express from 'express';
import db from '../db.js';
const router = express.Router();

// Get all patients
router.get('/', (req, res) => {
  db.query('SELECT * FROM patients', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Create a new patient
router.post('/', (req, res) => {
  const { name, dob, gender, contact_info } = req.body;
  db.query('INSERT INTO patients (name, dob, gender, contact_info) VALUES (?, ?, ?, ?)',
    [name, dob, gender, contact_info],
    (err, result) => {
      if (err) return res.status(400).send(err);
      res.json({ id: result.insertId });
    });
});

// Update patient
router.put('/:id', (req, res) => {
  const { name, dob, gender, contact_info } = req.body;
  db.query('UPDATE patients SET name=?, dob=?, gender=?, contact_info=? WHERE patient_id=?',
    [name, dob, gender, contact_info, req.params.id],
    (err) => {
      if (err) return res.status(400).send(err);
      res.send('Updated');
    });
});

// Delete patient
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM patients WHERE patient_id=?', [req.params.id], (err) => {
    if (err) return res.status(400).send(err);
    res.send('Deleted');
  });
});

export default router;
