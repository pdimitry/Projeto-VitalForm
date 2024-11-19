const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db');  // Conexão com o banco de dados
const authRoutes = require('./routes/authRoutes');  // Rotas de autenticação

dotenv.config();  // Carregar variáveis de ambiente
const app = express();

// Middleware
app.use(express.json());  // Para parsear o corpo das requisições em JSON
app.use(cors());  // Habilitar CORS

// Conectar ao banco de dados
connectDB();

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
