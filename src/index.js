import React from 'react';
import ReactDOM from 'react-dom';
import { Saludo } from './screens/dashboard'; 
import './styles/style.css'; 
import  Navbar  from './components/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Cursos from './screens/cursos';
import VerCursos from './screens/verCursos';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './screens/login';

export const routes = [
  { path: '/', name:'Dashbord', Component: Saludo, isPrivate: true },
  { path: '/agregarCursos', name:'Agregar curso', Component: Cursos, isPrivate: true },
  { path: '/verCursos', name:'Cursos', Component: VerCursos, isPrivate: true },
  { path: '/login', name:'Iniciar sesión', Component: LoginForm, isPrivate: false },
  // { path: '/signin', name:'Cursos', Component: LoginForm, isPrivate: false },
];

function App() {
  return (
    <div id="app-container">
      <div id="app-base-layout">
        <Routes>
          { routes.map(route => (
            route.isPrivate ?
              <Route 
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute>
                    <Navbar />
                    <route.Component />
                  </PrivateRoute>
                }
              />
              : <Route 
                  key={route.path}
                  path={route.path}
                  element={<route.Component />}
                />
          )) }
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
