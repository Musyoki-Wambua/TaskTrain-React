import React from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:3000/users/logout', {
        method: 'DELETE',
     })
     .then((response) => {
        if (response.ok) {
            navigate.push('/login');
        }
    });
  };

  const handleConfirm = () => {
    confirmAlert({
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: handleLogout,
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <div>
      <button type="button" onClick={handleConfirm}>Logout</button>
    </div>
  );
};

export default LogOut;
