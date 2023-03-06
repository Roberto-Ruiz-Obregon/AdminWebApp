import React from 'react';
import ReactDOM from 'react-dom';
import { Saludo } from './dashboard.js'; 
import './style.css'; 
import { Sidebar } from './sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // import Routes and Route components
import Cursos from './cursos';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Saludo />} /> 
        <Route path="/cursos" element={<Cursos />} /> 
      </Routes>
    <Sidebar />
    </div>
  );
}

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);



