import React from 'react';
import { Link } from 'react-router-dom';

const EspagueteDeAbobrinha = () => {
  return (
    <div style={{
        width: "80%",
        maxWidth: "800px",
        margin: "120px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
        color: "#333"
    }}>
      <h1 style={{
        fontSize: "2.5em",
        color: "#2c3e50",
        textAlign: "center",
        marginBottom: "20px"
      }}>Espaguete de Abobrinha</h1>

      <h3 style={{
        fontSize: "1.8em",
        color: "#2980b9",
        marginTop: "20px"
      }}>Ingredientes</h3>
      <ul style={{
        fontSize: "1.1em",
        lineHeight: "1.8",
        color: "#555",
        marginLeft: "20px"
      }}>
        <li>2 abobrinhas grandes</li>
        <li>2 dentes de alho picados</li>
        <li>2 colheres de sopa de azeite de oliva</li>
        <li>1/2 xícara de molho de tomate (opcional)</li>
        <li>Sal e pimenta a gosto</li>
        <li>Queijo parmesão ralado (opcional)</li>
      </ul>

      <h3 style={{
        fontSize: "1.8em",
        color: "#2980b9",
        marginTop: "20px"
      }}>Modo de Preparo</h3>
      <ol style={{
        fontSize: "1.1em",
        lineHeight: "1.8",
        color: "#555",
        marginLeft: "20px"
      }}>
        <li>Lave bem as abobrinhas.</li>
        <li>Use um espiralizador (ou ralador) para cortar as abobrinhas em tiras finas, como espaguete.</li>
        <li>Reserve as tiras de abobrinha.</li>
        <li>Aqueça o azeite de oliva em uma frigideira grande.</li>
        <li>Adicione o alho picado e refogue por 1-2 minutos, até dourar levemente.</li>
        <li>Adicione as tiras de abobrinha à frigideira e refogue por 3-5 minutos, até a abobrinha ficar al dente (cozida, mas ainda crocante).</li>
        <li>Tempere com sal e pimenta a gosto.</li>
        <li>Se preferir, adicione o molho de tomate e misture bem.</li>
      </ol>

      <Link to="/nutrição">
        <button style={{
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '1.1em',
            cursor: 'pointer',
            textAlign: 'center',
            marginTop: '30px',
            transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#2ecc71"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#27ae60"}
        >
          Voltar
        </button>
      </Link>
    </div>
  );
};

export default EspagueteDeAbobrinha;