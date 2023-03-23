import React, { Fragment, useState, useEffect } from 'react';
import { FireError, FireSucess } from '../utils/alertHandler';
import { getTopics, postTopic } from '../client/topics';
import Input from '../components/Input';
import '../styles/verCursos.css';

function Topics() {
    const [topic, setTopic] = useState('');
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const topics = await getTopics();
                console.log(topics);
                setTopics(topics);
            } catch (error) {
                FireError(error.response.data.message);
            }
        })();
    }, []);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const newTopic = await postTopic(topic);
            setTopics([...topics, newTopic]);

            FireSucess('Nuevo interes agregado con exito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <Fragment>
            <h4>Inicio / Intereses</h4>
            <h2>Crear Interes</h2>
            <div class='add-interest-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Input
                            label='Nombre del interés'
                            placeholder='Interés'
                            getVal={topic}
                            setVal={setTopic}
                        />
                    </div>
                    <button type='submit'>Crear</button>
                </form>
            </div>
            <h2>Intereses Agregados</h2>
            <div class='interests-container'>
                {topics.map((topic) => (
                    <p>{topic.topic}</p>
                ))}
            </div>
        </Fragment>
    );
}

export default Topics;
