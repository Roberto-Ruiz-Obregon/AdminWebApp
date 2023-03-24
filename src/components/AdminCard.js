import React from 'react';
import Button from '../components/Button';
import '../styles/adminCard.css';

function AdminCard(props) {
    const { admin, actionApprove, actionDelete } = props;
    const { name, email, _id } = admin;

    return (
        <div className='admin-container'>
            <p>{name}</p>
            <p>{email}</p>
            <div className='separator'></div>
            <div className='button-container'>
                <Button
                    action={(e) => actionApprove(_id)}
                    text='Verificar'
                    type='modify'
                />
                <Button action={(e) => actionDelete(_id)} text='Eliminar' type='delete' />
            </div>
        </div>
    );
}

export default AdminCard;
