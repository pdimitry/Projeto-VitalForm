// src/pages/Home.js
import React from 'react';
import './nutrição.css';
import logo from '../assets/imagens/imagem-logo/logo.png';
import logoNavBar from '../assets/imagens/imagem-logo/logo.png';
import { Link } from 'react-router-dom';
import CarouselReceitas from '../components/CarouselReceitas';

const Nutrição = () => (
  <div className="nutrição">
    <header>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"
            >VitalForm
            <img src={logoNavBar} alt="Logo VitalForm" height="50"
              width="50"/></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/nutrição">Nutrição</Link></li>
              <li><Link to="/comunidade">Comunidade</Link></li>
              <li><Link to="/fitness">Fitness</Link></li>
              <li><Link to="/bemestar">Bem Estar</Link></li>
            </ul>
          </div>
        </div>
    </nav>
    <div class="container-titulo-nutricao"></div>
      <h1>Dicas de Receitas</h1>

    </header>
      <body>
        <CarouselReceitas />
      </body>
  </div>
);

export default Nutrição;
