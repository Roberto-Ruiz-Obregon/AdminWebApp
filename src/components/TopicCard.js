import React from 'react';
import Button from './Button';
import '../styles/topicCard.css';

function TopicCard(props) {
    const { interest, action, type, actionText } = props;
    const { _id, topic } = interest;

    return (
        <div className='topic-container'>
            <p>{topic}</p>
            <div className='separator'></div>
            <Button action={(e) => action(_id)} text={actionText} type={type} />
        </div>
    );
}

export default TopicCard;
