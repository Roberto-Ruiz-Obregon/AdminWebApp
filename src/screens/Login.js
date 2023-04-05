import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { FireError, FireSucess } from '../utils/alertHandler';
import { postLogin } from '../client/authentication';
import { setToken, setAdminUserSaved, isAuthenticated } from '../utils/auth';
import axios from 'axios';
import '../styles/auth.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postLogin(email, password);
            if (response.status === 'success') {
                axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${response.token}`;

                setToken(response.token);
                setAdminUserSaved(response.data.user);
                navigate('/');
            }
        } catch (error) {
            if (error.response.status === 401) FireError(error.response.data.message);
            else FireError('Ocurrió un error. Por favor intenta de nuevo.');
        }
    };

    if (isAuthenticated()) return <Navigate to='/' />;

    return (
        <div className='auth-container'>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        type='password'
                        id='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Entrar</button>
            </form>
            <section>
                <Link to='/signup'>Registrarse</Link>
                <Link to='/cambiarContrasena'>Olvidé mi contraseña</Link>
            </section>
        </div>
    );
};

export default LoginForm;
