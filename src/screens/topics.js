import React, { Fragment, useState, useEffect } from 'react';
import { FireError, FireSucess } from '../utils/alertHandler';
import { getTopics, postTopic } from '../client/topics';
import '../styles/verCursos.css';

function Topics() {
    const [topic, setTopic] = useState('');
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        (async () => {
            const topics = await getTopics();
            console.log(topics);
            setTopics(topics);
        })();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTopic = await postTopic(topic);
        setTopics([...topics, newTopic]);
    };

    return (
        <Fragment>
            <h4>Inicio / Intereses</h4>
            <h2>Crear Interes</h2>
            <div class='add-interest-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='topic'>Nombre del interés</label>
                        <input
                            type='topic'
                            id='topic'
                            required
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
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
