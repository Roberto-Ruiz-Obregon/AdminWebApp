<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";

// style
import "./styles/style.css";

// views
import { Saludo } from "./screens/dashboard";
import Cursos from "./screens/cursos";
import verCursos from "./screens/verCursos";
import Navbar from "./components/sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { Saludo } from './screens/dashboard'; 
import './styles/style.css'; 
import  Navbar  from './components/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Cursos from './screens/cursos';
import VerCursos from './screens/verCursos'
>>>>>>> ep8c1-Fer

function App() {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route exact path="/" element={<Saludo />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/verCursos" element={<verCursos />} />
=======
        <Route exact path="/" element={<Saludo />} /> 
        <Route path="/agregarCursos" element={<Cursos />} />
        <Route path="/verCursos" element={<VerCursos />} />  
>>>>>>> ep8c1-Fer
      </Routes>
      <Navbar />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
