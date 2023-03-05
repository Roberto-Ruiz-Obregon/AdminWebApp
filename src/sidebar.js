import React from 'react';
import './style.css';

export function Sidebar() {
    return (
      <div className="sidebar">
        <button className="sidebar-button">Agregar curso</button>
        <button className="sidebar-button">Perfil</button>
        <button className="sidebar-button">Salir</button>
      </div>
    );
  }
  