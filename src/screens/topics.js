import React, { useState, useEffect } from 'react';
import { FireError, FireSucess } from '../utils/alertHandler';
import { getTopics, postTopic, deleteTopic } from '../client/topics';
import Input from '../components/Input';
import Button from '../components/Button';
import TopicCard from '../components/TopicCard';
import '../styles/topic.css';

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
            const newTopic = await postTopic(topic);
            setTopics([...topics, newTopic]);

            FireSucess('Nuevo interes agregado con exito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTopic(id);

            setTopics(topics.filter((topic) => topic._id !== id));

            FireSucess('Se ha eliminado el interes con exito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <div class='interest-container'>
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
                    <Button action={handleSubmit} text='Crear interes' type='create' />
                </form>
            </div>
            <h2>Intereses Agregados</h2>
            <div class='interests-container'>
                {topics.map((topic) => (
                    <TopicCard interest={topic} action={handleDelete} type='delete' />
                ))}
            </div>
        </div>
    );
}

export default Topics;
