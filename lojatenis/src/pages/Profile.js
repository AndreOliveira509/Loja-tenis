import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import { getProfile, updateProfile, deleteUser } from '../services/userService';
import '../styles/profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch (err) {
        console.error('Erro ao carregar perfil:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async (formData) => {
    try {
      const updatedUser = await updateProfile(formData);
      setUser(updatedUser);
      alert('Perfil atualizado com sucesso!');
    } catch (err) {
      console.error('Erro ao atualizar perfil:', err);
      alert('Erro ao atualizar perfil');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser();
      localStorage.removeItem('token');
    } catch (err) {
      console.error('Erro ao excluir conta:', err);
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (!user) return <div>Erro ao carregar perfil</div>;

  return (
    <UserProfile 
      user={user} 
      onUpdate={handleUpdate} 
      onDelete={handleDelete} 
    />
  );
};

export default Profile;