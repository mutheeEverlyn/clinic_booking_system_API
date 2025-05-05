import express from 'express';
import db from '../db.js';
const router = express.Router();

router.get('/', (_, res) => {
  db.query('SELECT * FROM appointments', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { patient_id, doctor_id, appointment_date, status } = req.body;
  db.query('INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES (?, ?, ?, ?)',
    [patient_id, doctor_id, appointment_date, status || 'Scheduled'],
    (err, result) => {
      if (err) return res.status(400).send(err);
      res.json({ id: result.insertId });
    });
});

router.put('/:id', (req, res) => {
  const { patient_id, doctor_id, appointment_date, status } = req.body;
  db.query('UPDATE appointments SET patient_id=?, doctor_id=?, appointment_date=?, status=? WHERE appointment_id=?',
    [patient_id, doctor_id, appointment_date, status, req.params.id],
    (err) => {
      if (err) return res.status(400).send(err);
      res.send('Updated');
    });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM appointments WHERE appointment_id=?', [req.params.id], (err) => {
    if (err) return res.status(400).send(err);
    res.send('Deleted');
  });
});

export default router;
