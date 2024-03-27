import React, { useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(AuthContext);
  return <>{!userLoggedIn ? <LoginForm /> : <h1>Informacion del usuario</h1>}</>;
};

export default LoginPage;
