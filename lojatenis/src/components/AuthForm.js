import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const AuthForm = ({ type, onSubmit, error }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{type === 'login' ? 'Login' : 'Registrar'}</h2>
        
        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          {type === 'register' && (
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          {type === 'register' && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>
          )}

          <button type="submit" className="auth-btn">
            {type === 'login' ? 'Entrar' : 'Registrar'}
          </button>
        </form>

        <div className="auth-footer">
          {type === 'login' ? (
            <>
              Não tem uma conta? <Link to="/register">Registre-se</Link>
            </>
          ) : (
            <>
              Já tem uma conta? <Link to="/login">Faça login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;