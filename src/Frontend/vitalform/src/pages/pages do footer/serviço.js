import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ServicesContainer = styled.div`
  background-color: #f1f1f1; 
  color: #333; 
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5em;
    text-align: center;
    color: #A9B388; 
    margin-bottom: 20px;
    font-weight: 700;
    animation: fadeIn 1s ease-out; 
  }

  p {
    font-size: 1.2em;
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: justify;
    animation: fadeIn 1.5s ease-out; 
  }

  ul {
    margin-top: 20px;
    padding-left: 20px;
    animation: fadeIn 2s ease-out; 
  }

  ul li {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 10px;
  }

 
  .home-button {
    display: block;
    width: 200px;
    padding: 15px;
    margin: 30px auto 0;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
    background-color: #007BFF; 
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease; 
    text-decoration: none;
  }

  .home-button:hover {
    background-color: #0056b3; 
    transform: translateY(-5px); 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
  }

 
  .home-button {
    display: block;
    width: 200px;
    padding: 15px;
    margin: 30px auto 0;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
    background-color: #A9B388; 
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    text-decoration: none;
    margin-bottom: 200px;
  }

  .home-button:hover {
    background-color: #28a745; 
    transform: translateY(-3px);
  }

  .home-button:active {
    transform: translateY(2px); 
  }
`;

const Services = () => {
  return (
    <ServicesContainer>
      <h1>Serviços do VitalForm</h1>
      <p>
        O <strong>VitalForm</strong> oferece uma gama de serviços destinados a apoiar pessoas
        que buscam melhorar sua saúde e bem-estar de forma acessível. Nossa missão é
        fornecer recursos práticos e eficazes para transformar sua vida sem sobrecarregar
        seu orçamento.
      </p>
      <p>Confira abaixo os principais serviços oferecidos:</p>
      <ul>
        <li><strong>Consultoria Nutricional:</strong> Planejamentos alimentares que atendem a diferentes necessidades e orçamentos.</li>
        <li><strong>Planos de Exercícios Personalizados:</strong> Programas de treino adaptados às suas metas e capacidade física.</li>
        <li><strong>Suporte de Saúde Mental:</strong> Orientação e apoio psicológico para manter a motivação e o bem-estar emocional.</li>
        <li><strong>Comunidade Online:</strong> Compartilhe experiências e obtenha apoio em nossa comunidade exclusiva.</li>
        <li><strong>Receitas Saudáveis e Econômicas:</strong> Descubra receitas deliciosas e acessíveis para melhorar sua alimentação.</li>
      </ul>

      <p>
        O <strong>VitalForm</strong> acredita que a saúde e o bem-estar devem ser acessíveis para todos,
        e por isso criamos esses serviços com o intuito de promover mudanças positivas e sustentáveis
        na sua vida.
      </p>

      <Link to="/" className="home-button">Voltar</Link>
    </ServicesContainer>
  );
};

export default Services;