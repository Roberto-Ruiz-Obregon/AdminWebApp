import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import logo from '../assets/image 9.png';
import CourseCard from '../components/CourseCard';

function Cursos() {
  const [newCourse, setNewCourse] = useState('');
  const [courses, setCourses] = useState([]);

  const handleInputChange = (event) => {
    setNewCourse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newCourses = [...courses, newCourse];
   
    setCourses(newCourses);
    setNewCourse('');
  };

  useEffect(function(){
    console.log(courses)
  }, [courses]) 

  return (
    <div>
      <h5 className="inicio_agregar">Inicio / Agregar Cursos</h5>
      <h2 className="agregarc">Agregar Cursos</h2>

      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="newCourse" className="newCourse_">
          Título del curso:
        </label>
        <input type="text" id="newCourse" className="newCourse_inpt" value={newCourse} onChange={handleInputChange} placeholder="Manualidades 3B"/>
        <h6 className="descripcion">Descripción del curso:</h6>
        <input type="text" className="description" onChange={handleInputChange} placeholder="En el curso podrás aprender..."/>
      </form>
      <label className="fecha">Fecha</label>
      <label className="cargo">Cargo</label>
      <label className="modalidad">Modalidad</label>
      <button type="submit" className="agregar">
          Agregar Curso
        </button>
      {courses.map((course, index) => ( 
        <CourseCard key={index} courseName={course}/>
      ))}
      
    </div>
  );
}

export default Cursos;



