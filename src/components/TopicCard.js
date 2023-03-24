import React from 'react';
import Button from '../components/Button';
import '../styles/topicCard.css';

function TopicCard(props) {
    const { interest, action, type } = props;
    const { _id, topic } = interest;

    return (
        <div className='topic-container'>
            <p>{topic}</p>
            <Button action={(e) => action(_id)} text='Eliminar' type={type} />
        </div>
    );
}

export default TopicCard;
