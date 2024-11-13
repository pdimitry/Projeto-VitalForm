import React from 'react';
import { Link } from 'react-router-dom';
import logoNavBar from '../assets/imagens/imagem-logo/logo.png';
import './header.css'; 

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    VitalForm
                    <img src={logoNavBar} alt="Logo VitalForm" height="50" width="50" />
                </a>
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
                        {/* Botões de Cadastro e Login com classes diferentes */}
                        <li className="nav-item">
                            <Link className="nav-link btn-cadastro" to="/cadastro">Cadastro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-login" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;