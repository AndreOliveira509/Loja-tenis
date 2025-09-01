import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { registerUser } from '../services/authService';
import '../styles/auth.css';

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      const { confirmPassword, ...data } = formData;
      const response = await registerUser(data);
      
      // Salvar token no localStorage
      localStorage.setItem('token', response.token);
      
      // Redirecionar para home
      navigate('/');
    } catch (err) {
      setError(err.message || 'Erro ao registrar');
    }
  };

  return <AuthForm type="register" onSubmit={handleSubmit} error={error} />;
};

export default Register;