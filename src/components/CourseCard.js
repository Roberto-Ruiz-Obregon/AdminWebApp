import React, { useState } from 'react';
import '../styles/CourseCard.css';

function CourseCard(props) {
    const { imgSrc, title, description, onClick, children } = props;

    return (
        <div className='course-card'>
            <h3>{title}</h3>
            {imgSrc &&
                <img src={imgSrc} alt={title} />
            }

            <p>{description}</p>
            <div className='course-card-properties'>
                { children }
            </div>
            <button className='btn-info' onClick={e => onClick(e)}>
                Editar
            </button>
        </div>
    );
}

export default CourseCard;
