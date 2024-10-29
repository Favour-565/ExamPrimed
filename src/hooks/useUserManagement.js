import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useUserManagement = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateUserProfile = async (userData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      
      localStorage.removeItem('user');
      sessionStorage.clear();

      
      navigate('/');
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateUserProfile,
    logout,
    isLoading,
    error,
  };
};
