// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1>NutriSpine</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/appointments">Consultas</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Cadastro</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
