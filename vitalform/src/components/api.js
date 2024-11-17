import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

app.post('/register', async (req, res) => {
    const { email } = req.body;
  
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(409).json({ message: 'Email já cadastrado' });
    }
  
    // Lógica para salvar o usuário...
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  });
  

export default api;
