import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const UserProtectWrapper = ({children}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/user-login');
    }
  }, [token]);

  return (
    <>
      {children}
    </>
  );
}

export default UserProtectWrapper
