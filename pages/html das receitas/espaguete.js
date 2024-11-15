import React from 'react';
import { Link } from 'react-router-dom';

const EspagueteDeAbobrinha = () => {
  return (
    <div>
      <h1>Espaguete de Abobrinha</h1>

      <h3>Ingredientes</h3>
      <ul>
        <li>2 abobrinhas grandes</li>
        <li>2 dentes de alho picados</li>
        <li>2 colheres de sopa de azeite de oliva</li>
        <li>1/2 xícara de molho de tomate (opcional)</li>
        <li>Sal e pimenta a gosto</li>
        <li>Queijo parmesão ralado (opcional)</li>
      </ul>

      <h3>Modo de Preparo</h3>
      <ol>
        <li>Lave bem as abobrinhas.</li>
        <li>Use um espiralizador (ou ralador) para cortar as abobrinhas em tiras finas, como espaguete.</li>
        <li>Reserve as tiras de abobrinha.</li>
        <li>Aqueça o azeite de oliva em uma frigideira grande.</li>
        <li>Adicione o alho picado e refogue por 1-2 minutos, até dourar levemente.</li>
        <li>Adicione as tiras de abobrinha à frigideira e refogue por 3-5 minutos, até a abobrinha ficar al dente (cozida, mas ainda crocante).</li>
        <li>Tempere com sal e pimenta a gosto.</li>
        <li>Se preferir, adicione o molho de tomate e misture bem.</li>
      </ol>

      <Link to="/nutrição">
        <button style={{ backgroundColor: 'chartreuse' }}>Voltar</button>
      </Link>
    </div>
  );
};

export default EspagueteDeAbobrinha;

