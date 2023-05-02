import React, { useState, useEffect } from 'react';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
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

            FireSucess('Nuevo interés agregado con éxito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Está seguro de que quiere eliminar este interés?',
                'Los cursos y personas que tengan este interés dejarán de tenerlo.'
            );

            if (confirmation.isDismissed) return;

            await deleteTopic(id);

            setTopics(topics.filter((topic) => topic._id !== id));

            FireSucess('Se ha eliminado el interés con éxito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <div className='interest-container'>
            <h4>Inicio / Intereses</h4>
            <h2>Crear Interes</h2>
            <div className='add-interest-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Input
                            label='Nombre del interés'
                            placeholder='Interés'
                            getVal={topic}
                            setVal={setTopic}
                            type='text'
                        />
                    </div>
                    <Button action={handleSubmit} text='Crear interés' type='create' />
                </form>
            </div>
            <h2>Intereses Agregados</h2>
            <div className='interests-container'>
                {topics.map((topic) => (
                    <TopicCard
                        key={topic._id}
                        interest={topic}
                        action={handleDelete}
                        actionText='Eliminar'
                        type='delete'
                    />
                ))}
            </div>
        </div>
    );
}

export default Topics;
