import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse } from '../client/course';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import '../styles/topic.css';

function Inscriptions() {
    const { id } = useParams();
    const [inscriptions, setInscriptions] = useState([]);
    const [course, setCourse] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const currCourse = await getCourse(id);

                setCourse(currCourse);
                // const topics = await getTopics();
                // setTopics(topics);
            } catch (error) {
                FireError(error.response.data.message);
            }
        })();
    }, []);

    const handleDelete = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Está seguro de que quiere eliminar este interés?',
                'El usuario inscrito dejera de tener acceso a este curso.'
            );

            if (confirmation.isDismissed) return;

            // await deleteTopic(id);

            // setTopics(topics.filter((topic) => topic._id !== id));

            FireSucess('Se ha eliminado la inscripcion con exito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <div className='interest-container'>
            <h4>Inicio / inscripciones</h4>
            <h2>Inscripciones a {course.courseName}</h2>
        </div>
    );
}

export default Inscriptions;
