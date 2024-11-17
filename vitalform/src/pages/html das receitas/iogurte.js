import React from 'react';
import { Link } from 'react-router-dom';

function IogurteComFrutas() {
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
            }}>Iogurte com Frutas</h1>

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
                <li>2 copos de iogurte natural (grego ou tradicional)</li>
                <li>1 xícara de frutas frescas</li>
                <li>1 colher de chá de mel ou açúcar</li>
                <li>1 colher de chá de sementes de chia ou granola</li>
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
                <li>Lave bem as frutas e corte-as em pedaços pequenos.</li>
                <li>Se desejar um sabor mais intenso, amasse.</li>
                <li>Coloque o iogurte natural numa tigela ou copo.</li>
                <li>Adicione as frutas por cima e misture levemente.</li>
                <li>Finalize com sementes de chia ou granola para dar crocância, se preferir.</li>
                <li>Sirva imediatamente ou leve à geladeira para esfriar.</li>
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

export default IogurteComFrutas;