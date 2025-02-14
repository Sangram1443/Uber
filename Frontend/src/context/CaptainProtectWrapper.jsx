import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const CaptainProtectWrapper = ({children}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
    }
  }, [token]);

  return (
    <>
      {children}
    </>
  );
}

export default CaptainProtectWrapper