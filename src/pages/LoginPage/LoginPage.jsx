import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/auth/authSlice";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "../../components/LoginForm/LoginForm.module.css";
import AnimatedCursor from "react-animated-cursor";
import { Navigate } from "react-router-dom"; // Додаємо імпорт Navigate

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginSuccess = (userData) => {
    dispatch(setUser({ user: userData.user, token: userData.token }));
    // history.push("/contacts"); // Закоментовуємо перенаправлення
    return <Navigate to="/contacts" replace />; // Додаємо Navigate
  };

  return (
    <div className={css.containerLogin}>
      <AnimatedCursor />
      <LoginForm onLogin={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
