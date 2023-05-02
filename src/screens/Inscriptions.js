import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse, getCourseInscriptions } from '../client/course';
import { deleteInscription } from '../client/inscriptions';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import InscriptionCard from '../components/InscriptionCard';
import '../styles/inscriptions.css';

function Inscriptions() {
    const { id } = useParams();
    const [inscriptions, setInscriptions] = useState([]);
    const [course, setCourse] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const currCourse = await getCourse(id);

                setCourse(currCourse);

                const inscriptions = await getCourseInscriptions(id);

                setInscriptions(inscriptions);
            } catch (error) {
                FireError(error.response.data.message);
            }
        })();
    }, [id]);

    const handleDelete = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Está seguro de que quiere eliminar este interés?',
                'El usuario inscrito dejará de tener acceso a este curso.'
            );

            if (confirmation.isDismissed) return;

            await deleteInscription(id);

            setInscriptions(inscriptions.filter((inscription) => inscription._id !== id));

            FireSucess('Se ha eliminado la inscripción con éxito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <div className='inscriptions-container'>
            <h4>Inicio / inscripciones</h4>
            <h2>Inscripciones a {course.courseName}</h2>
            <div className='inscription-list-titles'>
                <div>Día de inscripción</div>
                <div>Nombre</div>
                <div>Correo</div>
                <div>Edad</div>
                <div>Nivel educativo</div>
                <div>Código postal</div>
                <div>Ocupación</div>
                <div>Acciones</div>
            </div>
            <div className='inscription-list-container'>
                {inscriptions.map((inscription) => (
                    <InscriptionCard inscription={inscription} action={handleDelete} />
                ))}
            </div>
        </div>
    );
}

export default Inscriptions;
