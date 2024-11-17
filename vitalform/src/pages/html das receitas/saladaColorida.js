import React from 'react';
import { Link } from 'react-router-dom';

function SaladaColorida() {
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
            }}>Salada Colorida</h1>

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
                <li>2 xícaras de folhas verdes (alface, rúcula ou espinafre)</li>
                <li>1/2 xícara de tomate-cereja (cortados ao meio)</li>
                <li>1/2 xícara de cenoura ralada</li>
                <li>1/2 xícara de pepino (fatiado)</li>
                <li>1/2 xícara de pimentão (vermelho e amarelo, em tiras)</li>
                <li>1/4 de xícara de cebola roxa (fatiada)</li>
                <li>1/4 de xícara de milho (cozido ou de lata)</li>
                <li>1/4 de xícara de azeitonas (opcional)</li>
                <li>Salsinha ou coentro picado (a gosto)</li>
            </ul>

            <h3 style={{
                fontSize: "1.8em",
                color: "#2980b9",
                marginTop: "20px"
            }}>Molho:</h3>
            <ul style={{
                fontSize: "1.1em",
                lineHeight: "1.8",
                color: "#555",
                marginLeft: "20px"
            }}>
                <li>3 colheres de sopa de azeite de oliva</li>
                <li>1 colher de sopa de vinagre balsâmico ou suco de limão</li>
                <li>1 colher de chá de mostarda</li>
                <li>Sal e pimenta a gosto</li>
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
                <li>Em uma tigela grande, coloque todas as folhas verdes.</li>
                <li>Adicione os tomates, a cenoura, o pepino, os pimentões, a cebola roxa, o milho e as azeitonas.</li>
                <li>Em uma tigela pequena, misture os ingredientes do molho até emulsificar.</li>
                <li>Regue a salada com o molho e misture bem.</li>
                <li>Decore com salsinha ou coentro picado antes de servir.</li>
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

export default SaladaColorida;