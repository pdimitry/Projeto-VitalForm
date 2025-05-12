const bcrypt = require('bcryptjs');
const { User } = require('../models/userModel');

// Função de cadastro
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe!' });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o novo usuário
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: 'Usuário registrado com sucesso!',
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor!' });
  }
};

// Função de login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado!' });
    }

    // Verificar a senha
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Senha incorreta!' });
    }

    // Login bem-sucedido
    res.status(200).json({
      message: 'Login bem-sucedido!',
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor!' });
  }
};

module.exports = { registerUser, loginUser };
