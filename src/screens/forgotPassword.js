import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendChangePasswordEmail } from '../client/admin';
import '../styles/auth.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendChangePasswordEmail(email);
            alert('Se envió un correo con un link para cambiar su contraseña. Revise su bandeja de entrada.')
        }
        catch (error) {
            if (error.response.status === 404)
                alert('No se encontró el email.');
            else
                alert('Ocurrió un error. Por favor intenta de nuevo.');
        }
    };

    return (
        <div className="auth-container">
            <h1>Cambiar contraseña</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        placeholder="Email con el que creaste tu cuenta"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar correo</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
