// src/backend/controllers/userController.js
const fs = require('fs');
const path = './src/backend/data/users.json';

// Função para carregar os usuários do arquivo JSON
function loadUsers() {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}

// Função para salvar os usuários de volta ao arquivo JSON
function saveUsers(users) {
    fs.writeFileSync(path, JSON.stringify(users, null, 2));
}

// Criar um novo usuário
exports.createUser = (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();

    const newUser = { id: Date.now(), username, password };
    users.push(newUser);

    saveUsers(users);
    res.status(201).json({ message: 'Usuário criado com sucesso' });
};

// Obter todos os usuários
exports.getUsers = (req, res) => {
    const users = loadUsers();
    res.status(200).json(users);
};

// Atualizar um usuário
exports.updateUser = (req, res) => {
    const { id, username, password } = req.body;
    const users = loadUsers();

    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { id, username, password };
        saveUsers(users);
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
};

// Excluir um usuário
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const users = loadUsers();

    const userIndex = users.findIndex((user) => user.id === parseInt(id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        saveUsers(users);
        res.status(200).json({ message: 'Usuário excluído com sucesso' });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
};
