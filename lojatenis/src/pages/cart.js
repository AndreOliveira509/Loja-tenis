// src/pages/Cart.js
import React from 'react';
import '../styles/cart.css';

function Cart() {
  // Aqui você usaria o estado do carrinho do seu contexto ou Redux
  const cartItems = []; // Exemplo de dados

  return (
    <div className="cart-container">
      <h1>SEU CARRINHO</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Seu carrinho está vazio</p>
          <Link to="/products" className="continue-shopping">CONTINUAR COMPRANDO</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Tamanho: {item.size}</p>
                  <div className="item-quantity">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="item-price">
                  <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                  <button className="remove-item">REMOVER</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>RESUMO DO PEDIDO</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>R$ 0.00</span>
            </div>
            <div className="summary-row">
              <span>Frete</span>
              <span>Grátis</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>R$ 0.00</span>
            </div>
            <button className="checkout-button">FINALIZAR COMPRA</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;