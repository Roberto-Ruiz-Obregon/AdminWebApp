import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { getPrograms } from '../client/programs';

const Programs = () => {
    const navigate = useNavigate();
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await getPrograms();
                setPrograms(data);
            }
            catch(error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <Fragment>
            <h4>Inicio / Programas</h4>
            <div id="course-container">
                { programs.map(program => (
                    <CourseCard 
                        key={program._id}
                        imgSrc={program.imageUrl}
                        title={program.programName}
                        description={program.description}
                        onClick={() => navigate(`/programs/program/${program._id}`)}
                    >
                        <div>
                            <p>{program.category}</p>
                        </div>
                    </CourseCard>
                )) }
            </div>
        </Fragment>
    );
};

export default Programs;