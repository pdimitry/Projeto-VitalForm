import React, { useState } from 'react';
import './comunidade.css';
import balanca from '../assets/imagens/imagens-fitness/balanca.jpg';

const Comunidade = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();
    if (altura && peso) {
      const resultado = (peso / (altura * altura)).toFixed(2);
      setImc(resultado);
    }
  };

  return (
    <div className="comunidade">
      <div className="formulario">
        <header>
          <h1>Bem-vindo à Comunidade!</h1>
          <p>Junte-se ao nosso grupo no Telegram e compartilhe dicas e ideias sobre saúde e bem-estar.</p>
        </header>

        <div className="telegram-link">
          <p>
            Entre na nossa comunidade do 
            <a href="https://t.me/+Sux1tnL3huQxZGNh" target="_blank" rel="noopener noreferrer"> Telegram</a>
          </p>
        </div>

        <div className="imc-container">
          <h2>Calcule seu IMC</h2>
          <img src={balanca} alt="Calculadora IMC" className="imc-image" />
          <form onSubmit={calcularIMC}>
            <div className="input-group">
              <label htmlFor="altura">Altura (m)</label>
              <input
                type="number"
                id="altura"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                step="0.01"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="peso">Peso (kg)</label>
              <input
                type="number"
                id="peso"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
            </div>

            <button type="submit">Calcular IMC</button>
          </form>

          {imc && (
            <div className="resultado-imc">
              <h3>Seu IMC é: {imc}</h3>
              <p>{imc < 18.5 ? 'Abaixo do peso' : imc < 24.9 ? 'Peso normal' : imc < 29.9 ? 'Sobrepeso' : 'Obesidade'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comunidade;
