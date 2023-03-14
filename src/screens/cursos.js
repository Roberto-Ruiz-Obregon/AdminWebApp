import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import CourseCard from '../components/CourseCard';

// render course data
function Cursos() {
  const [newCourse, setNewCourse] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [occupation, setOccupation] = useState('');
  const [modality, setModality] = useState('');
  const [image, setImage] = useState(null);
  const [courses, setCourses] = useState([]);

  //create new course
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'newCourse') {
      setNewCourse(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'date') {
      setDate(value);
    } else if (name === 'occupation') {
      setOccupation(value);
    } else if (name === 'modality') {
      setModality(value);
    } else if (name === 'image') {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCourses = [
      ...courses,
      {
        title: newCourse,
        description: description,
        date: date,
        occupation: occupation,
        modality: modality,
        imgSrc: URL.createObjectURL(image),
      },
    ];

    setCourses(newCourses);
    setNewCourse('');
    setDescription('');
    setDate('');
    setOccupation('');
    setModality('');
    setImage(null);
  };

  return (
    <div>
      <h5 className="inicio_agregar">Inicio / Agregar Cursos</h5>
      <h2 className="agregarc">Agregar Cursos</h2>

      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="newCourse" className="newCourse_">
          Título del curso:
        </label>
        <input
          type="text"
          name="newCourse"
          id="newCourse"
          className="newCourse_inpt"
          value={newCourse}
          onChange={handleInputChange}
          placeholder="Manualidades 3B"
          required
        />
        <h6 className="descripcion">Descripción del curso:</h6>
        <input
          type="text"
          name="description"
          className="description"
          value={description}
          onChange={handleInputChange}
          placeholder="En el curso podrás aprender..."
        required/>
        <label className="elegir_img">Elegir imagen:</label>
        <input type="file" name="image" onChange={handleInputChange} className="seleccionar"/>
        <label className="fecha">Fecha</label>
        <input
          type="date"
          name="date"
          className="fecha_"
          value={date}
          onChange={handleInputChange}
        required/>
        <label className="cargo">Costo</label>
        <select
          name="occupation"
          className="cargo_"
          value={occupation}
          onChange={handleInputChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Gratis">Gratis</option>
          <option value="De pago">De pago</option>
        </select>

        <label className="modalidad">Modalidad</label>
        <select
          name="modality"
          className="modalidad_"
          value={modality}
          onChange={handleInputChange}
        >
          <option value="">Selecciona una opción</option>
          <option value="presencial">Presencial</option>
          <option value="en línea">En línea</option>
        </select>

                <button type="submit" className="agregar">
                  Agregar Curso
                </button>
              </form>
              
              {courses.map((course, index) => ( 
              <CourseCard 
                key={index} 
                courseName={course.title} 
                description={course.description} 
                startDate={course.date}
                occupation={course.occupation}
                modality={course.modality}
                imgSrc={course.imgSrc}
            />
            
        ))}

              
            </div>
          );
        }

        export default Cursos;
