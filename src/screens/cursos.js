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
      <h2 id="cursos">Aquí puedes agregar cursos</h2>
      <img src={logo} alt="Logo fundación" className="logo-der" />

      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="newCourse" id="newCourse_">
          Nuevo curso:
        </label>
        <input type="text" id="newCourse" value={newCourse} onChange={handleInputChange} />
        <button type="submit" id="agregar">
          Agregar Curso
        </button>
      </form>
     
      {courses.map((course, index) => ( 
        <CourseCard key={index} courseName={course}/>
      ))}
    </div>
  );
}

export default Cursos;



