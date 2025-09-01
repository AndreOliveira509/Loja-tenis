// src/components/ProductCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/product-card.css';

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [inCart, setInCart] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Aqui você adicionaria a lógica para atualizar o estado global
  };

  const addToCart = () => {
    setInCart(true);
    // Aqui você adicionaria a lógica para adicionar ao carrinho
  };

  return (
    <div className="product-card">
      <div className="product-badges">
        {product.isNew && <span className="badge-new">NOVO</span>}
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <Link to={`/products/${product.id}`} className="product-image-link">
        <div 
          className="product-image" 
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
      </Link>
      
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        
        <button 
          className={`add-to-cart ${inCart ? 'in-cart' : ''}`}
          onClick={addToCart}
        >
          {inCart ? '✔️ NO CARRINHO' : '🛒 ADICIONAR'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;