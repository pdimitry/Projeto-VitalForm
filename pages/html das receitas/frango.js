import React from 'react';
import { Link } from 'react-router-dom';

function FrangoGrelhado() {
    return (
        <div>
            <h1>Frango Grelhado</h1>

            <h3>Ingredientes:</h3>
            <ul>
                <li>4 filés de peito de frango</li>
                <li>2 colheres de sopa de azeite de oliva</li>
                <li>Suco de 1 limão</li>
                <li>2 dentes de alho picados</li>
                <li>Sal e pimenta a gosto</li>
                <li>Ervas frescas a gosto (como alecrim ou tomilho)</li>
            </ul>

            <h3>Modo de Preparo:</h3>
            <ol>
                <li>Em uma tigela, misture o azeite, o suco de limão, o alho, o sal, a pimenta e as ervas.</li>
                <li>Adicione os filés de frango e deixe marinar por pelo menos 30 minutos.</li>
                <li>Preaqueça a grelha ou frigideira em fogo médio-alto.</li>
                <li>Grelhe os filés de frango por cerca de 6-7 minutos de cada lado, ou até que estejam completamente cozidos.</li>
                <li>Retire do fogo e deixe descansar por alguns minutos antes de servir.</li>
            </ol>

            <Link to="../Nutrição/nutrição.html">
                <button style={{ backgroundColor: 'chartreuse' }}>Voltar</button>
            </Link>
        </div>
    );
}

export default FrangoGrelhado;