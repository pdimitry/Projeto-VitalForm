import '../pages/comunidade.css';
import React, { useState } from 'react';
import './formulario.css'; 



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
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            CPF:
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {submittedData && (
        <div>
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
