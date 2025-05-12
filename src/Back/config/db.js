const { Sequelize } = require('sequelize');
require('dotenv').config();  // Carregar variáveis de ambiente

// Criando a conexão com o banco de dados MySQL usando Sequelize
const sequelize = new Sequelize(process.env.MYSQL_URI, {
  dialect: 'mysql',  // Tipo de banco de dados
  logging: false,    // Desativa o log das queries SQL
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();  // Testa a conexão com o banco
    console.log('Conectado ao banco de dados MySQL...');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
    process.exit(1);  // Se não conseguir conectar, encerra o processo
  }
};

module.exports = { sequelize, connectDB };

// src/Backend/config/db.js
const sqlite3 = require('sqlite3').verbose();

// Cria a conexão com o banco de dados SQLite (banco de dados local)
const db = new sqlite3.Database('./vitalform.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados SQLite:', err);
    } else {
        console.log('Conectado ao banco de dados SQLite');
    }
});

module.exports = db;

