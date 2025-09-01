import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { loginUser } from '../services/authService';
import '../styles/auth.css';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const { password, confirmPassword, ...data } = formData;
      const response = await loginUser(data);
      
      // Salvar token no localStorage
      localStorage.setItem('token', response.token);
      
      // Redirecionar para home ou página anterior
      navigate('/');
    } catch (err) {
      setError(err.message || 'Erro ao fazer login');
    }
  };

  return <AuthForm type="login" onSubmit={handleSubmit} error={error} />;
};

export default Login;