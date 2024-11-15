import React from 'react';
import './comunidade.css';
import Formulario from '../components/Formulario';

const Comunidade = () => (
  <div className="comunidade">
    
    
    <div className='formulario'>
      <Formulario />
      <div className="telegram-link">
        <p>
          Entre na nossa comunidade do 
          <a href="https://t.me/link" target="_blank" rel="noopener noreferrer"> Telegram</a>
        </p>
      </div>
    </div>
  </div>
);

export default Comunidade;