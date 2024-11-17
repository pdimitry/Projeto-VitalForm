import React from 'react';
import { Link } from "react-router-dom";

const BoloDeBanana = () => {
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
      }}>Bolo de Banana</h1>

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
        <li>3 bananas maduras</li>
        <li>2 ovos</li>
        <li>1/2 xícara de óleo</li>
        <li>1 xícara de açúcar</li>
        <li>2 xícaras de farinha de trigo</li>
        <li>1 colher de sopa de fermento em pó</li>
        <li>1 pitada de sal</li>
        <li>Canela em pó a gosto (opcional)</li>
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
        <li>Preaqueça o forno a 180°C.</li>
        <li>Em um recipiente, amasse as bananas com um garfo.</li>
        <li>Adicione os ovos, o óleo e o açúcar às bananas amassadas e misture bem.</li>
        <li>Em outro recipiente, peneire a farinha, o fermento e o sal.</li>
        <li>Incorpore os ingredientes secos à mistura de banana até ficar homogêneo. Adicione canela, se desejar.</li>
        <li>Despeje a massa em uma forma untada.</li>
        <li>Asse por cerca de 40-50 minutos, ou até que um palito inserido no centro saia limpo.</li>
        <li>Deixe esfriar antes de desenformar e sirva.</li>
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

export default BoloDeBanana;