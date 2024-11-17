import React from 'react';
import { Link } from 'react-router-dom';

function ReceitaSalmão() {
    return (
        <div>
            <h1>Salmão</h1>
            
            <h3>Ingredientes</h3>
            <ul>
                <li>2 filés de salmão</li>
                <li>2 colheres de sopa de azeite de oliva</li>
                <li>2 dentes de alho picados</li>
                <li>Suco de 1 limão</li>
                <li>1 colher de sopa de mel (opcional)</li>
                <li>Sal e pimenta a gosto</li>
                <li>Ervas frescas a gosto (como alecrim, tomilho ou salsinha)</li>
                <li>Rodelas de limão para decorar (opcional)</li>
            </ul>

            <h3>Modo de Preparo</h3>
            <ol>
                <li>Tempere os filés de salmão com sal, pimenta e suco de limão.</li>
                <li>Deixe marinar por cerca de 10 minutos para pegar sabor.</li>
                <li>Aqueça o azeite de oliva em uma frigideira antiaderente em fogo médio.</li>
                <li>Adicione o alho picado e refogue por 1 minuto.</li>
                <li>Coloque os filés de salmão com a pele externa para baixo na frigideira.</li>
                <li>Cozinhe por cerca de 4-5 minutos de cada lado, até o salmão ficar dourado e cozido por dentro.</li>
                <li>Se desejar, regue com mel para dar um toque agridoce.</li>
            </ol>

            <Link to="../Nutrição/nutrição.html">
                <button style={{ backgroundColor: 'chartreuse' }}>Voltar</button>
            </Link>
        </div>
    );
}

export default ReceitaSalmão;