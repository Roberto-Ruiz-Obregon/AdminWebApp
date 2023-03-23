import React, { Fragment, useState, useEffect } from 'react';
import { MySwal } from '../utils/alertHandler';
import '../styles/verCursos.css';

function VerCursos() {
    const [interest, setInterest] = useState('');
    const [interests, setInterests] = useState([]);

    const handleSubmit = async (e) => {};

    return (
        <Fragment>
            <h4>Inicio / Intereses</h4>
            <h2>Intereses Agregados</h2>
            <div class='add-interest-container'></div>
            <div class='interests-container'></div>
        </Fragment>
    );
}

export default VerCursos;
