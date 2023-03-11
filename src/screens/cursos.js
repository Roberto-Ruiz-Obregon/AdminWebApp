import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import CourseCard from '../components/CourseCard';

function Cursos() {
  const [newCourse, setNewCourse] = useState('');
  const [description, setDescription] = useState('');
  const [courses, setCourses] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'newCourse') {
      setNewCourse(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newCourses = [...courses, { title: newCourse, description: description }];
   
    setCourses(newCourses);
    setNewCourse('');
    setDescription('');
  };

  return (
    <div>
      <h5 className="inicio_agregar">Inicio / Agregar Cursos</h5>
      <h2 className="agregarc">Agregar Cursos</h2>

      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="newCourse" className="newCourse_">
          Título del curso:
        </label>
        <input type="text" name="newCourse" id="newCourse" className="newCourse_inpt" value={newCourse} onChange={handleInputChange} placeholder="Manualidades 3B"/>
        <h6 className="descripcion">Descripción del curso:</h6>
        <input type="text" name="description" className="description" value={description} onChange={handleInputChange} placeholder="En el curso podrás aprender..."/>
      
        <label className="fecha">Fecha</label>
        <label className="cargo">Cargo</label>
        <label className="modalidad">Modalidad</label>
        <button type="submit" className="agregar">
          Agregar Curso
        </button>
      </form>
      
      {courses.map((course, index) => ( 
        <CourseCard key={index} courseName={course.title} description={course.description}/>
      ))}
      
    </div>
  );
}

export default Cursos;




