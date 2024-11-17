import React, { useState } from 'react';
import '../pages/comunidade.css';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (email && password) {
      alert('Login bem-sucedido!');
    } else {
      setErrorMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="login-container">
      
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
