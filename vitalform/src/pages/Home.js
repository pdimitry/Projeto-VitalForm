import React from 'react';
import './home.css';
import logoNavBar from '../assets/imagens/imagem-logo/logo.png';
import logo from '../assets/imagens/imagem-logo/Logo VitalForm.png'
import CarouselComponent from '../components/CarouselComponent';
import { Link } from 'react-router-dom';



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
          <h1>Bem Vindo!</h1>
          <p>
            O site "VitalForm" é uma plataforma dedicada a promover uma vida
            saudável e equilibrada. Com um design intuitivo e atraente, o site
            oferece uma variedade de recursos, incluindo artigos informativos
            sobre nutrição, exercícios físicos e saúde mental. Os usuários podem
            encontrar dicas práticas para uma alimentação saudável, rotinas de
            exercícios personalizadas e técnicas de relaxamento.
          </p>
          <p>
            Além disso, a plataforma conta com um blog atualizado regularmente,
            onde especialistas compartilham insights sobre bem-estar e
            autocuidado. Os visitantes também têm acesso a fóruns de discussão,
            onde podem interagir com outras pessoas e trocar experiências. Com
            ferramentas interativas, como calculadoras de IMC e planejadores de
            refeições, o site visa empoderar os usuários a tomarem decisões
            informadas sobre sua saúde. "Saúde e Bem-Estar" é mais do que um
            simples site; é uma comunidade que inspira e motiva as pessoas a
            alcançarem seus objetivos de saúde e felicidade.
          </p>
          <p>
            O site foi criado para atender uma necessidade crescente de suporte
            em saúde e bem-estar entre pessoas de baixa renda. Muitas vezes,
            essas pessoas não têm acesso a serviços como personal trainers ou
            nutricionistas, o que pode dificultar a adoção de hábitos saudáveis.
          </p>
        </div>
      </div>
    </div>

      
  </div>
);

export default Home;