import React from 'react';
import './fitness.css';
import Treino from '../components/Treino';
import logoNavBar from '../assets/imagens/imagem-logo/logo.png';
import { Link } from 'react-router-dom';

const Fitness = () => (
  <div className="fitness">
    
    <body>
      <Treino/>
    </body>
  </div>
);

export default Fitness;