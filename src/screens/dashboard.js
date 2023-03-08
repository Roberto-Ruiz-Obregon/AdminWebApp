import React from "react";
import "../styles/style.css";
import logo from "../assets/image 9.png";
import grafica from "../assets/grafica.png";

export function Saludo() {
  const usuario = {
    nombre: "Carlos",
    apellido: "Ramírez",
  };

  return (
    <div className="saludo-container">
<<<<<<< HEAD
      <h1 className="saludo-greeting">
        Hola, {usuario.nombre} {usuario.apellido}!
      </h1>
      <h3 className="personas_inscritas">Personas inscritas</h3>
      <img src={grafica} alt="grafica" className="grafica" />
      <img src={logo} alt="Logo fundación" className="logo-der" />
=======
      <h1 className="saludo-greeting">Hola, {usuario.nombre} {usuario.apellido}!</h1>
      <h3 className="personas_inscritas">Personas inscritas:</h3>
      <img src={grafica} alt="grafica" className="grafica"/>
      
>>>>>>> ep8c1-Fer
    </div>
  );
}

export default Saludo;
