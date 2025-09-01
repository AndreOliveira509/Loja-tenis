// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>OS MELHORES TÊNIS DO MERCADO</h1>
          <p>Encontre o par perfeito para seu estilo</p>
          <Link to="/products" className="cta-button">VER PRODUTOS</Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>DESTAQUES</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <div className="featured-badge">NOVO</div>
            <div className="featured-image" style={{backgroundImage: 'url(https://example.com/tenis1.jpg)'}}></div>
            <h3>Nike Air Max 270</h3>
            <Link to="/products/1" className="featured-link">VER DETALHES</Link>
          </div>
          {/* Repetir para outros 2-3 produtos destacados */}
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefit-card">
          <div className="benefit-icon">✈️</div>
          <h3>Frete Grátis</h3>
          <p>Para compras acima de R$ 300</p>
        </div>
        {/* Repetir para outros benefícios */}
      </section>
    </div>
  );
}

export default Home;