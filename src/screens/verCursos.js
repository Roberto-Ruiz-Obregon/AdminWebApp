import React, { Fragment } from 'react';
import CourseCard from '../components/CourseCard';
import '../styles/verCursos.css';

function VerCursos() {
    const courses = [
        {
            _id: 'ferkflmerf',
            courseName: 'Curso random',
            description: 'Sumérgete en el mundo de la imaginación y la creatividad a través de la literatura.',
            startDate: '2023-02-02',
            endDate: '2023-02-03',
            modality: 'Remoto',
            status: 'Gratuito',
        },
        {
            _id: 'ferkflmerf',
            courseName: 'Curso random',
            description: 'Sumérgete en el mundo de la imaginación y la creatividad a través de la literatura.',
            startDate: '2023-02-02',
            endDate: '2023-02-03',
            modality: 'Remoto',
            status: 'Gratuito',
        },
        {
            _id: 'ferkflmerf',
            courseName: 'Curso random',
            description: 'Sumérgete en el mundo de la imaginación y la creatividad a través de la literatura.',
            startDate: '2023-02-02',
            endDate: '2023-02-03',
            modality: 'Remoto',
            status: 'Gratuito',
        },
    ];
    return (
        <Fragment>
            <h4>Inicio / Ver Cursos</h4>
            <div id="course-container">
                { courses.map(course => (
                    <CourseCard 
                        key={course._id}
                        courseName={course.courseName}
                        description={course.description}
                        startDate={new Date(course.startDate).toLocaleDateString()}
                        endDate={new Date(course.endDate).toLocaleDateString()}
                        modality={course.modality}
                        status={course.status}
                    />
                )) }
            </div>
        </Fragment>
    );
}

export default VerCursos;