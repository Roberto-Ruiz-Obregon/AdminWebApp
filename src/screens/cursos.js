import React, { useState, useEffect } from "react";
import "../styles/style.scss";
import logo from "../assets/image 9.png";
import CourseCard from "../components/CourseCard";

function Cursos() {
  const [newCourse, setNewCourse] = useState("");
  const [courses, setCourses] = useState([]);

  const handleInputChange = (event) => {
    setNewCourse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCourses = [...courses, newCourse];

    setCourses(newCourses);
    setNewCourse("");
  };

  useEffect(
    function () {
      console.log(courses);
    },
    [courses]
  );

  return (
    <div>
      <h5 className="inicio_agregar">Inicio / Agregar Cursos</h5>
      <h2 className="agregarc">Agregar Cursos</h2>

      <form onSubmit={handleSubmit} id="form">
<div className="box">
        <label htmlFor="newCourse" id="newCourse_">
          Título del curso:
        </label>
        <input type="text" id="newCourse" className="newCourse_inpt" value={newCourse} onChange={handleInputChange} />
        <button type="submit" id="agregar">
          Agregar Curso
        </button>
      </div>
      </form>

      {courses.map((course, index) => (
        <CourseCard key={index} courseName={course} />
        ))}
    </div>
  );
}

export default Cursos;
