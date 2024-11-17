import React, { useState } from 'react';
import './Cadastro.css';
import axios from 'axios';

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Por favor, preencha todos os campos.');
      setSuccessMessage('');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await axios.post('https://sua-api.com/register', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccessMessage('Cadastro realizado com sucesso!');
        setErrorMessage('');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        // Exibe a mensagem de erro específica retornada pelo backend
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Erro ao realizar o cadastro. Tente novamente mais tarde.');
      }
      setSuccessMessage('');
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirmar Senha:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
