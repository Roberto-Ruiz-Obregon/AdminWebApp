import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/addCourse.css';

function Cursos() {
    // Course attributes
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [schedule, setSchedule] = useState('');
    const [teacher, setTeacher] = useState('');
    const [capacity, setCapacity] = useState('');
    const [accessLink, setAccessLink] = useState('');
    const [cost, setCost] = useState(0);
    const [postalCode, setPostalCode] = useState('');
    const [image, setImage] = useState(null);

    const [modality, setModality] = useState('');
    const [occupation, setOccupation] = useState('');

    // Topics
    const [topicsInCourse, setTopicsInCourse] = useState([]);
    const [topicsInCourseUI, setTopicsInCourseUI] = useState([]);
    const [topics, setTopics] = useState([]);

    const [course, setCourse] = useState({});

    return (
        <div className='add-course-container'>
            <h5 className='inicio_agregar'>Inicio / Agregar Cursos</h5>
            <h2 className=''>Agregar Cursos</h2>
            <div className='form-preview-container'>
                <form className='form-container'>
                    <Input label='Titulo del curso' placeholder='Curso de lectura' />

                    {/* <label className='cargo'>Costo</label>
                <select
                    name='occupation'
                    className='cargo_'
                    value={occupation}
                    onChange={handleInputChange}
                    required>
                    <option value=''>Selecciona una opción</option>
                    <option value='Gratis'>Gratis</option>
                    <option value='De pago'>De pago</option>
                </select>

                <label className='modalidad'>Modalidad</label>
                <select
                    name='modality'
                    className='modalidad_'
                    value={modality}
                    onChange={handleInputChange}>
                    <option value=''>Selecciona una opción</option>
                    <option value='presencial'>Presencial</option>
                    <option value='en línea'>En línea</option>
                </select> */}
                </form>
                <div className='course-container'>
                    <CourseCard
                        courseName={course.title}
                        description={course.description}
                        startDate={course.date}
                        occupation={course.occupation}
                        modality={course.modality}
                        imgSrc={course.imgSrc}
                    />
                </div>
            </div>
        </div>
    );
}

export default Cursos;
