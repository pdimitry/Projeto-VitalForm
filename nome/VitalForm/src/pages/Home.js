import React from 'react';
import './home.css';
import logoNavBar from '../assets/imagens/imagem-logo/logo.png';
import logo from '../assets/imagens/imagem-logo/Logo VitalForm.png'
import CarouselComponent from '../components/CarouselComponent';
import { Link } from 'react-router-dom';
import imgCalculo from '../assets/imagens/imagem-gráfico/imagem gráfico.jpg'

const Home = () => (
  <div className="home">
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
      <h1>Bem-vindo ao VitalForm</h1>
      <CarouselComponent />
    </header>
    <div class="grid-container">
      <div class="img-vitalform">
        <div class="container-1 col-md 6">
        <img src={logo} alt="Logo VitalForm" />
        </div>
      </div>


      <div class="container-2 col md-6">
        <div class="container-sobre">
        <img src={imgCalculo} alt="Gráfico " />
        <h4>
        Cálculo sobre pessoas que não praticam atividade física.
        </h4>
        <p>
        - Definição da função
        f(x) = -0.1x^2 + 6x - 60
        </p>
        <p>- Derivada
        f&#39;(x) = -0.2x + 6
        </p>
        <p>
        - Encontrar pontos críticos
        -0.2x + 6 = 0
        6/0.2 = 30
        </p>
        <p>
        - Segunda derivada
        f&#39;&#39;(x) = -0.2
        </p>
        <p>
        - Cálculo valor máximo
        f(30)= -0.1(30^2) + 6(30) - 60
        f(30)= -0.1(900) + 180 - 60
        f(30)= -90 + 180 - 60 = 30
        </p>
        <p>
        - Cálculo valor mínimo
        Nossa função começa com valor negativo, não tendo um valor mínimo local, logo o valor
        mínimo tende a ser -∞ a medida que x se afaste de 30.
        </p>
        
        </div>
      </div>
    </div>

      
  </div>
);

export default Home;