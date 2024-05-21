import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';
import { useAuth } from "../../hooks";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button className={css.logoutButton} type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu; 
