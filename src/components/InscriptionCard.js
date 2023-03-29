import React from 'react';
import Button from './Button';
import '../styles/inscriptionCard.css';

function CourseCard(props) {
    const { inscription, action } = props;
    const { user, createdAt, _id } = inscription;

    return (
        <div className='inscription-card'>
            <div>Inscrito el {createdAt.substr(0, 10)}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.age} años</div>
            <div>{user.educationLevel}</div>
            <div>{user.postalCode}</div>
            <div>{user.job}</div>
            <div>
                <Button
                    action={(e) => action(_id)}
                    text='Eliminar inscripcion'
                    type='delete'
                />
            </div>
        </div>
    );
}

export default CourseCard;
