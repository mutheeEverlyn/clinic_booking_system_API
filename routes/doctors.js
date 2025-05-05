import express from 'express';
import db from '../db.js';
const router = express.Router();

router.get('/', (_, res) => {
  db.query('SELECT * FROM doctors', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { name, specialty, contact_info } = req.body;
  db.query('INSERT INTO doctors (name, specialty, contact_info) VALUES (?, ?, ?)',
    [name, specialty, contact_info],
    (err, result) => {
      if (err) return res.status(400).send(err);
      res.json({ id: result.insertId });
    });
});

router.put('/:id', (req, res) => {
  const { name, specialty, contact_info } = req.body;
  db.query('UPDATE doctors SET name=?, specialty=?, contact_info=? WHERE doctor_id=?',
    [name, specialty, contact_info, req.params.id],
    (err) => {
      if (err) return res.status(400).send(err);
      res.send('Updated');
    });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM doctors WHERE doctor_id=?', [req.params.id], (err) => {
    if (err) return res.status(400).send(err);
    res.send('Deleted');
  });
});

export default router;
