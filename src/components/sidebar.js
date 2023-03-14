import React from "react";
import "../styles/style.scss";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/perfil.png";
import { User } from 'react-feather'

// navigation bar at the top
function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <User color="white" alt="perfil" className="btn_perfil"/>
      <button className="navbar-button" id='inicio_btn' onClick={() => navigate('/')}>Inicio</button>
      <button className="navbar-button" id='inicio_btn' onClick={() => navigate('/')}>Correos</button>
      <button className="navbar-button" onClick={() => navigate('/agregarCursos')}>
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
