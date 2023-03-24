import React from 'react';
import Button from '../components/Button';
import '../styles/adminCard.css';

function AdminCard(props) {
    const { admin, actionApprove, actionDelete } = props;
    const { name, email, _id } = admin;

    return (
        <div className='topic-container'>
            <p>{name}</p>
            <p>{email}</p>
            <div className='Button Container'>
                <Button
                    action={(e) => actionApprove(_id)}
                    text='Eliminar'
                    type='modify'
                />
                <Button action={(e) => actionDelete(_id)} text='Eliminar' type='delete' />
            </div>
        </div>
    );
}

export default AdminCard;
