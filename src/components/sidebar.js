import React from 'react';
import '../styles/style.css';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../assets/perfil.png'

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={profile} alt="perfil" className="btn_perfil" />
      <button className="navbar-button" id='inicio_btn' onClick={() => navigate('/')}>Inicio</button>
      <button className="navbar-button" onClick={() => navigate('/cursos')}>
        Agregar cursos
      </button>
      <button className="navbar-button" onClick={() => navigate('/verCursos')}>
        Ver cursos
      </button>
      <button className="navbar-button">Salir</button>
    </div>
  ); 
}

export default Navbar;


  
