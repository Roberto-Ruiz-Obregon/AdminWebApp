import React from 'react';
import '../styles/style.css';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../assets/perfil.png'

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <img src={profile} alt="perfil" className="btn_perfil" />
      <button className="sidebar-button" id='inicio_btn' onClick={() => navigate('/')}>Inicio</button>
      <button className="sidebar-button" onClick={() => navigate('/cursos')}>
        Agregar cursos
      </button>
      <button className="sidebar-button" onClick={() => navigate('/verCursos')}>
        Ver cursos
      </button>
      <button className="sidebar-button">Salir</button>
    </div>
    
  ); 
}

export default Sidebar;
