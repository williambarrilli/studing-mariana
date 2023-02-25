import React from "react";
import "./styles.css";
import Logo from "../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src={Logo} alt="Logo" className="container-image" />
      <div className="menu-itens">
        <h1 onClick={() => navigate("/home")}>Home</h1>
        <h1 onClick={() => navigate("/Sobre")}>Sobre</h1>
      </div>
    </div>
  );
};

export default Header;
