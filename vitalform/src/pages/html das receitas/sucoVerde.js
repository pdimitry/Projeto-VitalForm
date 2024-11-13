import React from 'react';
import { Link } from 'react-router-dom';

function SucoVerde() {
    return (
        <div>
            <h1>Suco Verde</h1>

            <h3>Ingredientes:</h3>
            <ul>
                <li>1 xícara de espinafre fresco</li>
                <li>1/2 pepino</li>
                <li>1/2 maçã verde</li>
                <li>1/2 limão (suco)</li>
                <li>1 colher de sopa de gengibre ralado</li>
                <li>1 xícara de água ou água de coco</li>
                <li>Gelo a gosto</li>
            </ul>

            <h3>Modo de Preparo:</h3>
            <ol>
                <li>Coloque todos os ingredientes no liquidificador.</li>
                <li>Bata até obter uma mistura homogênea.</li>
                <li>Coe se preferir um suco mais suave (opcional).</li>
                <li>Sirva gelado, com gelo se desejar.</li>
            </ol>

            <Link to="../Nutrição/nutrição.html">
                <button style={{ backgroundColor: 'chartreuse' }}>Voltar</button>
            </Link>
        </div>
    );
}

export default SucoVerde;