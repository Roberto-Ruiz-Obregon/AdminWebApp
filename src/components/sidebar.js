import React from "react";
import "../styles/style.css";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/perfil.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={profile} alt="perfil" className="btn_perfil" />
<<<<<<< HEAD
      <button
        className="navbar-button"
        id="inicio_btn"
        onClick={() => navigate("/")}
      >
        Inicio
      </button>
      <button className="navbar-button" onClick={() => navigate("/cursos")}>
=======
      <button className="navbar-button" id='inicio_btn' onClick={() => navigate('/')}>Inicio</button>
      <button className="navbar-button" id='inicio_btn' onClick={() => navigate('/')}>Correos</button>
      <button className="navbar-button" onClick={() => navigate('/agregarCursos')}>
>>>>>>> ep8c1-Fer
        Agregar cursos
      </button>
      <button className="navbar-button" onClick={() => navigate("/verCursos")}>
        Ver cursos
      </button>
      <button className="navbar-button" id='inicio_btn' onClick={() => navigate('/becasProgramas')}>Becas y programas</button>
      <button className="navbar-button" id='inicio_btn' onClick={() => navigate('/estadísticas')}>Estadísticas</button>
      <button className="navbar-button" id='inicio_btn' onClick={() => navigate('/pagos')}>Pagos</button>

    </div>
  );
}

export default Navbar;
