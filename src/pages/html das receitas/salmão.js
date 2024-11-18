import React from 'react';
import { Link } from 'react-router-dom';

function ReceitaSalmão() {
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
            }}>Salmão</h1>

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
                <li>2 filés de salmão</li>
                <li>2 colheres de sopa de azeite de oliva</li>
                <li>2 dentes de alho picados</li>
                <li>Suco de 1 limão</li>
                <li>1 colher de sopa de mel (opcional)</li>
                <li>Sal e pimenta a gosto</li>
                <li>Ervas frescas a gosto (como alecrim, tomilho ou salsinha)</li>
                <li>Rodelas de limão para decorar (opcional)</li>
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
                <li>Tempere os filés de salmão com sal, pimenta e suco de limão.</li>
                <li>Deixe marinar por cerca de 10 minutos para pegar sabor.</li>
                <li>Aqueça o azeite de oliva em uma frigideira antiaderente em fogo médio.</li>
                <li>Adicione o alho picado e refogue por 1 minuto.</li>
                <li>Coloque os filés de salmão com a pele externa para baixo na frigideira.</li>
                <li>Cozinhe por cerca de 4-5 minutos de cada lado, até o salmão ficar dourado e cozido por dentro.</li>
                <li>Se desejar, regue com mel para dar um toque agridoce.</li>
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

export default ReceitaSalmão;