import React from 'react';
import { Link } from 'react-router-dom';

function SaladaColorida() {
    return (
        <div>
            <h1>Salada Colorida</h1>

            <h3>Ingredientes:</h3>
            <ul>
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

            <h3>Molho:</h3>
            <ul>
                <li>3 colheres de sopa de azeite de oliva</li>
                <li>1 colher de sopa de vinagre balsâmico ou suco de limão</li>
                <li>1 colher de chá de mostarda</li>
                <li>Sal e pimenta a gosto</li>
            </ul>

            <h3>Modo de Preparo:</h3>
            <ol>z
                <li>Em uma tigela grande, coloque todas as folhas verdes.</li>
                <li>Adicione os tomates, a cenoura, o pepino, os pimentões, a cebola roxa, o milho e as azeitonas.</li>
                <li>Em uma tigela pequena, misture os ingredientes do molho até emulsificar.</li>
                <li>Regue a salada com o molho e misture bem.</li>
                <li>Decore com salsinha ou coentro picado antes de servir.</li>
            </ol>

            <Link to="../Nutrição/nutrição.html">
                <button style={{ backgroundColor: 'chartreuse' }}>Voltar</button>
            </Link>
        </div>
    );
}

export default SaladaColorida;