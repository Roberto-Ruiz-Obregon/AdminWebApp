import React from 'react';
import ReactDOM from 'react-dom';

// style
import './styles/style.css'; 

// views
import { Saludo } from './screens/dashboard'; 
import Cursos from './screens/cursos';
import verCursos from './screens/verCursos';
import  Navbar  from './components/sidebar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Saludo />} /> 
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/verCursos" element={<verCursos />} />  
      </Routes>
    <Navbar />
    </div>
  );
}

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);



