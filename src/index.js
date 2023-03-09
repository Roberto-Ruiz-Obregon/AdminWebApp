import React from 'react';
import ReactDOM from 'react-dom';
import { Saludo } from './screens/dashboard'; 
import './styles/style.scss'; 
import  Navbar  from './components/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Cursos from './screens/cursos';
import VerCursos from './screens/verCursos'

const feather = require('feather-icons')

function App() {
  return (
    <div id="app-container">
      <Navbar />
      <div id="app-base-layout">
        <Routes>
          <Route exact path="/" element={<Saludo />} /> 
          <Route path="/agregarCursos" element={<Cursos />} />
          <Route path="/verCursos" element={<VerCursos />} />  
        </Routes>
      </div>
      <script src="./assets/feather.min.js"></script>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
