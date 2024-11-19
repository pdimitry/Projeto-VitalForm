import '../pages/comunidade.css';
import React, { useState } from 'react';
import './Formulario.css'; 

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const data = { nome, cpf, email };
    setSubmittedData(data); 
    
    
    setNome('');
    setCpf('');
    setEmail('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Dados Enviados:</h2>
          <p><strong>Nome:</strong> {submittedData.nome}</p>
          <p><strong>CPF:</strong> {submittedData.cpf}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;