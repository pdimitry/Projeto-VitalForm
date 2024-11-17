const express = require('express');
const router = express.Router();
const db = require('./db');  


router.post('/treino', (req, res) => {
  const { descricao, tipos } = req.body;

  const query = 'INSERT INTO treino (descricao, tipos) VALUES (?, ?)';
  db.query(query, [descricao, tipos], (err, result) => {
    if (err) {
      console.error('Erro ao inserir treino:', err);
      return res.status(500).send('Erro ao adicionar treino');
    }
    res.status(201).json({ message: 'Treino adicionado', id_treino: result.insertId });
  });
});


router.get('/treinos', (req, res) => {
  const query = 'SELECT * FROM treino';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao recuperar treinos:', err);
      return res.status(500).send('Erro ao recuperar treinos');
    }
    res.status(200).json(results);
  });
});


router.get('/treino/:id_treino', (req, res) => {
  const { id_treino } = req.params;
  const query = 'SELECT * FROM treino WHERE id_treino = ?';

  db.query(query, [id_treino], (err, result) => {
    if (err) {
      console.error('Erro ao recuperar treino:', err);
      return res.status(500).send('Erro ao recuperar treino');
    }
    if (result.length === 0) {
      return res.status(404).send('Treino não encontrado');
    }
    res.status(200).json(result[0]);
  });
});


router.put('/treino/:id_treino', (req, res) => {
  const { id_treino } = req.params;
  const { descricao, tipos } = req.body;

  const query = 'UPDATE treino SET descricao = ?, tipos = ? WHERE id_treino = ?';
  db.query(query, [descricao, tipos, id_treino], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar treino:', err);
      return res.status(500).send('Erro ao atualizar treino');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Treino não encontrado');
    }
    res.status(200).json({ message: 'Treino atualizado' });
  });
});


router.delete('/treino/:id_treino', (req, res) => {
  const { id_treino } = req.params;

  const query = 'DELETE FROM treino WHERE id_treino = ?';
  db.query(query, [id_treino], (err, result) => {
    if (err) {
      console.error('Erro ao deletar treino:', err);
      return res.status(500).send('Erro ao deletar treino');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Treino não encontrado');
    }
    res.status(200).json({ message: 'Treino deletado' });
  });
});

module.exports = router;