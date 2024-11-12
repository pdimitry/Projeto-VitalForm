import React from 'react';
import './home.css';
import logo from '../assets/imagens/imagem-logo/Logo VitalForm.png'
import imgCalculo from '../assets/imagens/imagem-gráfico/imagem gráfico.jpg'
import CarouselComponent from '../components/CarouselComponent';



const Home = () => (
  <div className="home">
    <div>
     <h1>Bem-vindo ao VitalForm</h1>
      <CarouselComponent />
      </div>
    <div class="grid-container">
      <div class="img-vitalform">
        <div class="container-1 col-md 6">
        <img src={logo} alt="Logo VitalForm" />
        </div>
      </div>

      
      <div class="container-2 col md-6">
        <div class="container-sobre">
        <img src={imgCalculo} alt="Gráfico " />
        <p>
        Cálculo sobre pessoas que não praticam atividade física.
        </p>
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