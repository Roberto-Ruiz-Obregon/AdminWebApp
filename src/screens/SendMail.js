import React, { useState, useEffect } from 'react';
import { sendEmailToEveryone, sendEmailByZone } from '../client/email';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import Input from '../components/Input';
import InputImage from '../components/InputImage';
import Select from '../components/Select';
import Button from '../components/Button';
import '../styles/sendMail.css';

function SendMail() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sendMode, setSendMode] = useState('Enviar correo a todos');
    const [postalCode, setPostalCode] = useState(76159);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (!image) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(image);
        setPreview(objectUrl);
    }, [image]);

    const handleSubmit = async (e) => {
        try {
            const form = new FormData();
            form.append('subject', subject);
            form.append('message', message);
            form.append('postalCode', postalCode);
            form.append('emailImage', image);

            const confirmation = await FireQuestion(
                '¿Está seguro de que desea enviar este correo?',
                'Este correo será enviado a todas las personas que ha seleccionado.'
            );

            if (confirmation.isDismissed) return;

            if (sendMode === 'Enviar correo a todos') {
                sendEmailToEveryone(form);
            } else {
                sendEmailByZone(form);
            }

            FireSucess('Se han enviado los correos de forma exitosa.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <div className='email-container'>
            <h4>Inicio / Enviar correos y anuncios</h4>
            <h2>Crear nuevo correo</h2>
            <div className='form-preview-container'>
                <div className='email-form-container'>
                    <Input
                        label='Encabezado del correo'
                        placeholder='Nueva carrera en Amealco!'
                        getVal={subject}
                        setVal={setSubject}
                        type='text'
                    />
                    <Input
                        label='Mensaje del correo'
                        placeholder='Disfruta de esta gran carrera con tu familia en...'
                        getVal={message}
                        setVal={setMessage}
                        type='text'
                    />
                    <InputImage
                        label='Imagen principal del correo o anuncio'
                        getVal={image}
                        setVal={setImage}
                    />
                    <Select
                        label='Selecciona a quiénes quieres enviarle el correo'
                        getVal={sendMode}
                        setVal={setSendMode}
                        options={[
                            'Enviar correo a todos',
                            'Enviar correo por código postal',
                        ]}
                    />
                    {sendMode === 'Enviar correo por código postal' ? (
                        <Input
                            label='Código postal al que se enviaran los correos'
                            placeholder='76159'
                            getVal={postalCode}
                            setVal={setPostalCode}
                            type='number'
                        />
                    ) : null}
                    <Button action={handleSubmit} text='Enviar correos' type='create' />
                </div>
                <div className='email-preview'>
                    <h4>Vista preliminar</h4>
                    <h3>{subject}</h3>
                    <p>{message}</p>
                    <img src={preview} alt='Imagen de correo' />
                </div>
            </div>
        </div>
    );
}

export default SendMail;
