import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34; 
  color: #fff; 
  padding: 20px 15px;
  text-align: center;

  h3 {
    font-size: 1.8em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9em;
    margin-bottom: 20px;
    color: #bbb; 
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  nav ul li {
    display: inline-block;
  }

  nav ul li a {
    text-decoration: none;
    color: #61dafb;
    font-weight: bold;
    font-size: 0.95em;
    transition: color 0.3s ease;
  }

  nav ul li a:hover {
    color: #fff; 
  }

  

`;

const Footer = () => (
  <FooterContainer>
    <h3>VitalForm</h3>
    <p>&copy; 2024 VitalForm. Todos os direitos reservados.</p>
    <nav>
      <ul>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/serviço">Serviços</Link></li>
      </ul>
    </nav>
  </FooterContainer>
);

export default Footer;
