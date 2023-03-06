import React from 'react';
import './style.css';
import logo from './assets/image 9.png';
// { useState }

export function Saludo() {
  const usuario = {
    nombre: 'Carlos',
    apellido: 'Ramírez'
    
  }

  return (
    <div className="saludo-container">
      <h1 className="saludo-greeting">Hola, {usuario.nombre} {usuario.apellido}!</h1>
      <img src={logo} alt="Logo fundación" className="logo-der" />
    </div>
    
  );
}

export default Saludo;




