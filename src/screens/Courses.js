import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../client/course';
import { Video, Users, Calendar } from 'react-feather';
import Button from '../components/Button';
import Pagination from '../components/Pagination';
import Input from '../components/Input';
import '../styles/verCursos.css';

function Courses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [getPage, setPage] = useState(1);
    const [getName, setName] = useState("");
    const [getLength, setLength] = useState("");
    const [getPostalCode, setPostalCode] =  useState("");

    useEffect(() => {
        getCourses()
        .then(data => {
            setCourses(data)
            setLength(data.length)
        });
    }, []);

    useEffect(() => {
        getCourses(getName, getPage, 8, '', getPostalCode)
        .then(data => {
            setCourses(data)
            setLength(data.length)
        });
    }, [getPage, getPostalCode, getName]);

    return (
        <Fragment>
            <div className='header-container'>
                <h4>Inicio / Cursos</h4>
                <Button action = {() => navigate('/agregarCursos')} text="Agregar nuevo curso" type = "create"/>
            </div>
            <div className='search-container'>
                <div className='input-container'>
                    <Input
                        label='Buscar curso por nombre:'
                        placeholder = "Buscar"
                        getVal={getName}
                        setVal={setName}
                        type='text'
                    />
                </div>
                <div className='input-container'>
                    <Input
                        label='Buscar curso por CP:'
                        placeholder = "12345"
                        getVal={getPostalCode}
                        setVal={setPostalCode}
                        type='number'
                    />
                </div>
            </div>
            <div id="course-container">
                { courses.map(course => (
                    <CourseCard 
                        key={course._id}
                        imgSrc={course.imageUrl}
                        title={course.courseName}
                        description={course.description}
                        onClick={() => navigate(`/cursos/${course._id}`)}
                    >
                        <div>
                            {course.modality === 'Remoto' ? <Video /> : <Users />}
                            <p>{course.modality}</p>
                        </div>
                        <div>
                            <Calendar />
                            <p>{new Date(course.startDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                            {course.cost
                            ? <p>$ {course.cost}</p>
                            : <p>Gratis</p>
                            }
                        </div>    
                    </CourseCard>
                )) }
            </div>
            <Pagination lenght = {getLength} getPage = {getPage} setPage = {setPage} limit = {8} />
        </Fragment>
    );
}

export default Courses;