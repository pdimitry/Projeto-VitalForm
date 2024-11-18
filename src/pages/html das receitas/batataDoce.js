import React from 'react';
import { Link } from "react-router-dom";

const BatataDoceAssada = () => {
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
      }}>Batata Doce Assada</h1>

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
        <li>4 batatas-doces médias</li>
        <li>2 colheres de sopa de azeite de oliva</li>
        <li>1 colher de chá de alecrim seco ou fresco</li>
        <li>Sal e pimenta a gosto</li>
        <li>1 colher de chá de alho em pó (opcional)</li>
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
        <li>Preaqueça o forno a 200°C.</li>
        <li>Descasque e corte as batatas-doces em cubos ou fatias.</li>
        <li>Em uma tigela, misture as batatas-doces com azeite, alecrim, alho em pó, sal e pimenta.</li>
        <li>Espalhe as batatas-doces temperadas em uma assadeira forrada com papel manteiga.</li>
        <li>Asse por 25-30 minutos ou até que as batatas estejam douradas e macias, mexendo na metade do tempo.</li>
        <li>Sirva quente como acompanhamento.</li>
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

export default BatataDoceAssada;