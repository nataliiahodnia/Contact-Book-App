import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/selectors';
import css from './AuthNav.module.css'; 

const AuthNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const linkActive = ({ isActive }) => isActive ? `${css.link} ${css.active}` : css.link;

  return (
    <div className={css.containerAuth}>
      {!isLoggedIn && (
        <>
        <NavLink to="/register" className={linkActive} >Sign up</NavLink>
        <NavLink to="/login" className={linkActive}>Sign in</NavLink>         
        </>
      )}
    </div>
  );
};

export default AuthNav;
