import React from 'react';
import { Link } from 'react-router-dom';

function FrangoGrelhado() {
    return (
        <div style={{
            width: "80%",
            maxWidth: "800px",
            margin: "30px auto",
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
            }}>Frango Grelhado</h1>

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
                <li>4 filés de peito de frango</li>
                <li>2 colheres de sopa de azeite de oliva</li>
                <li>Suco de 1 limão</li>
                <li>2 dentes de alho picados</li>
                <li>Sal e pimenta a gosto</li>
                <li>Ervas frescas a gosto (como alecrim ou tomilho)</li>
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
                <li>Em uma tigela, misture o azeite, o suco de limão, o alho, o sal, a pimenta e as ervas.</li>
                <li>Adicione os filés de frango e deixe marinar por pelo menos 30 minutos.</li>
                <li>Preaqueça a grelha ou frigideira em fogo médio-alto.</li>
                <li>Grelhe os filés de frango por cerca de 6-7 minutos de cada lado, ou até que estejam completamente cozidos.</li>
                <li>Retire do fogo e deixe descansar por alguns minutos antes de servir.</li>
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

export default FrangoGrelhado;