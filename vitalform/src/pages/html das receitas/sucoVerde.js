import React from 'react';
import { Link } from 'react-router-dom';

function SucoVerde() {
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
        }}>Suco Verde</h1>
  
        <h3 style={{
          fontSize: "1.8em",
          color: "#2980b9",
          marginTop: "20px"
        }}>Ingredientes:</h3>
        <ul style={{
          fontSize: "1.1em",
          lineHeight: "1.8",
          color: "#555",
          marginLeft: "20px"
        }}>
          <li>1 xícara de espinafre fresco</li>
          <li>1/2 pepino</li>
          <li>1/2 maçã verde</li>
          <li>1/2 limão (suco)</li>
          <li>1 colher de sopa de gengibre ralado</li>
          <li>1 xícara de água ou água de coco</li>
          <li>Gelo a gosto</li>
        </ul>
  
        <h3 style={{
          fontSize: "1.8em",
          color: "#2980b9",
          marginTop: "20px"
        }}>Modo de Preparo:</h3>
        <ol style={{
          fontSize: "1.1em",
          lineHeight: "1.8",
          color: "#555",
          marginLeft: "20px"
        }}>
          <li>Coloque todos os ingredientes no liquidificador.</li>
          <li>Bata até obter uma mistura homogênea.</li>
          <li>Coe se preferir um suco mais suave (opcional).</li>
          <li>Sirva gelado, com gelo se desejar.</li>
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
  }
  
  export default SucoVerde;