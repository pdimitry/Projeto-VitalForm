import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SobreContainer = styled.div`
  background-color: #f9f9f9; 
  color: #333; 
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto; 
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5em;
    text-align: center;
    color: #A9B388; 
    margin-bottom: 20px;
    font-weight: 700;
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
    animation: fadeIn 1.5s ease-out;
  }

  ul li {
    font-size: 1.1em;
    line-height: 1.6;
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

const Sobre = () => {
  return (
    <SobreContainer>
      <h1>Sobre o VitalForm</h1>
      <p>
        O <strong>VitalForm</strong> é uma plataforma dedicada a promover saúde e bem-estar,
        especialmente para pessoas acima do peso que enfrentam desafios financeiros.
        Nosso objetivo é oferecer recursos acessíveis e de qualidade para todos que
        desejam transformar suas vidas de forma saudável.
      </p>
      <p>
        Acreditamos que um estilo de vida saudável deve ser inclusivo e sustentável.
        Por isso, criamos conteúdos que abordam:
      </p>
      <ul>
        <li>Dicas práticas de nutrição para refeições saudáveis e econômicas;</li>
        <li>Planos de exercícios adaptados às diferentes realidades;</li>
        <li>Orientações sobre saúde mental para fortalecer a motivação;</li>
        <li>Uma comunidade online para troca de experiências e apoio mútuo.</li>
      </ul>
      <p>
        No <strong>VitalForm</strong>, promovemos um ambiente inspirador, ajudando você
        a alcançar seus objetivos com empatia, respeito e sem sobrecarregar o bolso.
      </p>
      
      
      <Link to="/" className="home-button">Voltar</Link>
    </SobreContainer>
  );
};

export default Sobre;