import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';
import { Navigate } from 'react-router-dom'; 

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    return <Navigate to="/login" />; 
  };

  if (!user) {
    return null; 
  }

  return (
    <div className={css.userMenu}>
      <span className={css.userName}>Welcome, {user.name}!</span>
      <button className={css.logoutButton} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
