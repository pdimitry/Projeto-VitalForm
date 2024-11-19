const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');  // Importando a conexão com o banco

// Definindo o modelo User
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,  // Adiciona automaticamente as colunas createdAt e updatedAt
});

// Sincronizar o modelo com o banco de dados
const syncDatabase = async () => {
  await User.sync();  // Sincroniza o modelo com o banco de dados, criando a tabela caso não exista
};

module.exports = { User, syncDatabase };
