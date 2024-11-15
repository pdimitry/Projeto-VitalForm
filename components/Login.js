import React, { useState } from 'react';
import '../pages/comunidade.css';

function Login() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (name && cpf && email && password) {
      alert('Login bem-sucedido!');
    } else {
      setErrorMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="login-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Login;