// src/pages/About.js
import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>SOBRE A PISA FIRME</h1>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Nossa História</h2>
          <p>Fundada em 2023, a Pisa Firme nasceu da paixão por tênis e da vontade de oferecer os melhores produtos do mercado.</p>
          
          <h2>Missão</h2>
          <p>Fornecer tênis de alta qualidade com conforto e estilo incomparáveis.</p>
          
          <h2>Valores</h2>
          <ul>
            <li>Qualidade acima de tudo</li>
            <li>Atendimento personalizado</li>
            <li>Satisfação garantida</li>
          </ul>
        </div>
        
        <div className="about-image">
          <img src="https://example.com/about-image.jpg" alt="Loja Pisa Firme" />
        </div>
      </section>

      <section className="team-section">
        <h2>NOSSA EQUIPE</h2>
        <div className="team-grid">
          {/* Membros da equipe */}
        </div>
      </section>
    </div>
  );
}

export default About;