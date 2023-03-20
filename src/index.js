import React from 'react';
import ReactDOM from 'react-dom';
import { Saludo } from './screens/dashboard'; 
import './styles/style.css'; 
import  Navbar  from './components/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Cursos from './screens/cursos';
import VerCursos from './screens/verCursos'
import VerProgramas from './screens/verProgramas'

function App() {
  return (
    <div id="app-container">
      <Navbar />
      <div id="app-base-layout">
        <Routes>
          <Route exact path="/" element={<Saludo />} /> 
          <Route path="/agregarCursos" element={<Cursos />} />
          <Route path="/verCursos" element={<VerCursos />} /> 
          <Route path="/becasProgramas" element={<VerProgramas />} />
        </Routes>
      </div>
    </div>
  );
}

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);



