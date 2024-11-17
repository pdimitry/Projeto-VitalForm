const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db');
const treinoRoutes = require('./treinoRoutes');
const port = 3001;

app.use(bodyParser.json());

app.use('/api', treinoRoutes);


app.post('/usuarios', (req, res) => {
  const { nome, email, nascimento } = req.body;

  const query = 'INSERT INTO usuario (nome, email, nascimento) VALUES (?, ?, ?)';
  connection.query(query, [nome, email, nascimento], (err, result) => {
    if (err) {
      console.error('Erro ao inserir usuário:', err);
      return res.status(500).send('Erro ao criar usuário');
    }
    res.status(201).send({ id_usuario: result.insertId, nome, email, nascimento });
  });
});


app.get('/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuario';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter usuários:', err);
      return res.status(500).send('Erro ao obter usuários');
    }
    res.status(200).json(results);
  });
});


app.post('/treinos', (req, res) => {
  const { descricao, tipos } = req.body;

  const query = 'INSERT INTO treino (descricao, tipos) VALUES (?, ?)';
  connection.query(query, [descricao, tipos], (err, result) => {
    if (err) {
      console.error('Erro ao inserir treino:', err);
      return res.status(500).send('Erro ao criar treino');
    }
    res.status(201).send({ id_treino: result.insertId, descricao, tipos });
  });
});


app.get('/treinos', (req, res) => {
  const query = 'SELECT * FROM treino';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter treinos:', err);
      return res.status(500).send('Erro ao obter treinos');
    }
    res.status(200).json(results);
  });
});


app.post('/usuario_pratica_treino', (req, res) => {
  const { id_usuario, id_treino, data_pratica } = req.body;

  const query = 'INSERT INTO usuario_pratica_treino (id_usuario, id_treino, data_pratica) VALUES (?, ?, ?)';
  connection.query(query, [id_usuario, id_treino, data_pratica], (err, result) => {
    if (err) {
      console.error('Erro ao registrar prática de treino:', err);
      return res.status(500).send('Erro ao registrar prática de treino');
    }
    res.status(201).send({
      id: result.insertId,
      id_usuario,
      id_treino,
      data_pratica
    });
  });
});


app.get('/usuario_pratica_treino/:id_usuario', (req, res) => {
  const { id_usuario } = req.params;
  const query = 'SELECT * FROM usuario_pratica_treino WHERE id_usuario = ?';
  connection.query(query, [id_usuario], (err, results) => {
    if (err) {
      console.error('Erro ao obter prática de treino do usuário:', err);
      return res.status(500).send('Erro ao obter prática de treino');
    }
    res.status(200).json(results);
  });
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });

  process.on('SIGINT', () => {
    console.log('Servidor encerrado.');
    process.exit();
  });
