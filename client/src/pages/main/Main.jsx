import React from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./main.scss";

const Main = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <SideBar />
        <div className="right-content">
          <NavBar />
          <main className="main-content">
            <h1>메인 페이지</h1>
            <button onClick={handleLoginClick}>로그인 페이지로 이동</button>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
