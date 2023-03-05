import React from 'react';
import ReactDOM from 'react-dom';
import { Saludo } from './dashboard.js'; 
import './style.css'; 
import { Sidebar } from './sidebar';

function App() {
  return (
    <div>
      <Saludo />
      <Sidebar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));



