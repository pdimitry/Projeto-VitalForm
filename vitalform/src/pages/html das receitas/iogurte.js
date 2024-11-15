import React from 'react';
import { Link } from 'react-router-dom';

function IogurteComFrutas() {
    return (
        <div>
            <h1>Iogurte com Frutas</h1>

            <h3>Ingredientes</h3>
            <ul>
                <li>2 copos de iogurte natural (grego ou tradicional)</li>
                <li>1 xícara de frutas frescas</li>
                <li>1 colher de chá de mel ou açúcar</li>
                <li>1 colher de chá de sementes de chia ou granola</li>
            </ul>

            <h3>Modo de Preparo</h3>
            <ol>
                <li>Lave bem as frutas e corte-as em pedaços pequenos.</li>
                <li>Se desejar um sabor mais intenso, amasse.</li>
                <li>Coloque o iogurte natural numa tigela ou copo.</li>
                <li>Adicione as frutas por cima e misture levemente.</li>
                <li>Finalize com sementes de chia ou granola para dar crocância, se preferir.</li>
                <li>Sirva imediatamente ou leve à geladeira para esfriar.</li>
            </ol>

            <Link to="../Nutrição/nutrição.html">
                <button style={{ backgroundColor: 'chartreuse' }}>Voltar</button>
            </Link>
        </div>
    );
}

export default IogurteComFrutas;