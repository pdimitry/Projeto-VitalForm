import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
    <h3 class="footer-center">VitalForm</h3>
    <p>&copy; 2024 VitalForm. Todos os direitos reservados.</p>
    <nav>
        <ul>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/serviço">Serviços</Link></li>
        </ul>
    </nav>
</footer>
);

export default Footer;