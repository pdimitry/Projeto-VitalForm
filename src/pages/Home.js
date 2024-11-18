import React from 'react';
import './home.css';
import imgCalculo from '../assets/imagens/imagem-gráfico/imagem gráfico.jpg';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => (
  <div className="home">
    <CarouselComponent />
    
    <div className="flex-container">
      <div className="box">
        <h1>Bem-vindo ao VitalForm</h1>
        <p>Transforme sua Saúde e Bem-Estar. Na VitalForm, acreditamos que saúde e bem-estar vão além do corpo – envolvem também a mente e o estilo de vida. Estamos aqui para ajudar você a alcançar uma vida mais equilibrada e saudável, com orientação e ferramentas que apoiam cada etapa da sua jornada.</p>
        <p>Nosso compromisso é oferecer a você um conteúdo confiável, produtos de alta qualidade e serviços personalizados para que você possa viver melhor. Conheça nosso portfólio de programas de bem-estar, acesse conteúdos exclusivos e inspire-se com dicas práticas para melhorar seu dia a dia.</p>
        <p>Descubra como é possível conquistar uma rotina mais saudável com VitalForm – seu aliado em qualidade de vida!</p>
      </div>
    </div>
    
    <div className="container-grafico">
      <img src={imgCalculo} alt="Gráfico" />
      <div className="grafico-info">
        <p>Cálculo sobre pessoas que não praticam atividade física:</p>
        <p>- Definição da função: f(x) = -0.1x² + 6x - 60</p>
        <p>- Derivada: f'(x) = -0.2x + 6</p>
        <p>- Encontrar pontos críticos: -0.2x + 6 = 0 → 6/0.2 = 30</p>
        <p>- Segunda derivada: f''(x) = -0.2</p>
        <p>- Cálculo valor máximo: f(30) = -0.1(30²) + 6(30) - 60 = 30</p>
        <p>- Cálculo valor mínimo: Nossa função começa com valor negativo, não tendo um valor mínimo local, logo o valor mínimo tende a ser -∞ à medida que x se afaste de 30.</p>       
      </div>
    </div>
  </div>
);

export default Home;
