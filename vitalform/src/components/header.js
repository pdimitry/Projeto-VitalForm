import React from 'react';
import { Link } from 'react-router-dom';
import logoNavBar from '../assets/imagens/imagem-logo/logo.png';
import './header.css'; 

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand d-flex align-items-center">
                    <img src={logoNavBar} alt="Logo VitalForm" height="40" width="40" className="me-2" />
                    <Link className="nav-link" to="/">VitalForm</Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nutrição">Nutrição</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comunidade">Comunidade</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/fitness">Fitness</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bemestar">Bem Estar</Link>
                        </li>
                    </ul>
                    <div className="navbar-buttons-container">
                        <Link className="nav-link btn-cadastro" to="/cadastro">Cadastro</Link>
                        <Link className="nav-link btn-login" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
