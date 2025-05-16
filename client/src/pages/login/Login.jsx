import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/main");
  };

  return (
    <div>
      Login
      <button onClick={handleMainClick}>메인 페이지로 이동</button>
    </div>
  );
};

export default Login;
