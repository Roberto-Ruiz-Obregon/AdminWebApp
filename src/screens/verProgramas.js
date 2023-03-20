import React, { Fragment } from 'react';
import CourseCard from '../components/CourseCard';
import '../styles/verProgramas.css';

function VerProgramas() {
    const programs = [
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
            <h4>Inicio / Becas y Programas</h4>
            <div id="program-container">
                { programs.map(program => (
                    <CourseCard 
                        key={program._id}
                        courseName={program.courseName}
                        description={program.description}
                        startDate={new Date(program.startDate).toLocaleDateString()}
                        endDate={new Date(program.endDate).toLocaleDateString()}
                        modality={program.modality}
                        status={program.status}
                    />
                )) }
            </div>
        </Fragment>
    );
}


export default VerProgramas;