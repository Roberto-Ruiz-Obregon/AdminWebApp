import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => navigate('/cursos')}>
        Agregar cursos
      </button>
      <button className="sidebar-button">Perfil</button>
      <button className="sidebar-button">Salir</button>
    </div>
  );
}

  