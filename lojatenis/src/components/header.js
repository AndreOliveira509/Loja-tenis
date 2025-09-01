import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../services/authService'; // Corrigido o nome da função
import logo from '../assets/logo.png'; // Certifique-se de ter o arquivo logo.png na pasta assets
import '../styles/header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    
    if (token) {
      try {
        const user = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(user.isAdmin || false);
      } catch (err) {
        console.error('Erro ao decodificar token:', err);
      }
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 48;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    setIsAdmin(false);
    window.location.href = '/';
  };

  return (
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <div className="header-inner">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/" className="brand">Pisa Firme</Link>
        </div>

        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Produtos</Link>
          <Link to="/about" className="nav-link">Sobre</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
          
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="nav-link">Perfil</Link>
              {isAdmin && <Link to="/admin" className="nav-link">Admin</Link>}
              <button onClick={handleLogout} className="nav-link logout-btn">Sair</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Registrar</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header; // Exportação correta