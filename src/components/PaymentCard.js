import React from 'react';
import Button from './Button';
import '../styles/paymentCard.css';

function TopicCard(props) {
    const { payment, hanldeAccept, hanldeDecline } = props;
    const { _id, user, course, billImageURL } = payment;

    return (
        <div className='payment-container'>
            <img src={billImageURL} alt='Payment' />
            <div className='separator'></div>
            <div className='info-container'>
                <div className='course-info-container'>
                    <p className='category'>Curso:</p>
                    <p>{course.courseName}</p>
                    <p className='category'>Costo:</p>
                    <p>{course.cost}</p>
                    <p className='category'>Modalidad:</p>
                    <p>{course.modality}</p>
                    <p className='category'>Cupo restante:</p>
                    <p>{course.capacity}</p>
                </div>
                <div className='separator-vertical'></div>
                <div className='user-info-container'>
                    <p className='category'>Nombre:</p>
                    <p>{user.name}</p>
                    <p className='category'>Correo:</p>
                    <p>{user.email}</p>
                    <p className='category'>Edad:</p>
                    <p>{user.age}</p>
                    <p className='category'>Nivel educativo:</p>
                    <p>{user.educationLevel}</p>
                </div>
            </div>
            <div className='separator'></div>
            <div className='button-container'>
                <Button
                    action={(e) => hanldeAccept(_id)}
                    text='Aceptar pago'
                    type='create'
                />
                <Button
                    action={(e) => hanldeDecline(_id)}
                    text='Rechazar pago'
                    type='delete'
                />
            </div>
        </div>
    );
}

export default TopicCard;
