import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import { postSignup } from '../client/authentication';
import { isAuthenticated } from '../utils/auth';
import '../styles/auth.css';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    /**
     * Handles the form submission for user signup by preventing the default form submission behavior, checking that the password and passwordConfirm values match, and sending a POST request to the '/admin/auth/signup' endpoint with the user's name, email, password, and passwordConfirm data. 
     * 
     * @param {Event} e - The form submission event that triggered the function.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordConfirm !== password) {
            FireError('Las contraseñas no coinciden.');
            return;
        }
        try {
            const data = { name, email, password, passwordConfirm };
            const response = await postSignup(data);
            if (response.status === 'success') {
                FireSucess('Se ha enviado la solicitud exitosamente. Por favor espere a que la acepten.');
                navigate('/login');
            }
        } catch (error) {
            if ([400, 401].includes(error.response.status)) FireError(error.response.data.message);
            else FireError('Ocurrió un error. Por favor intenta de nuevo.');
        }
    };

    if (isAuthenticated()) return <Navigate to='/' />;

    return (
        <div className='auth-container'>
            <h1>Registrarse</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <input
                        type='text'
                        id='name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                <div>
                    <label htmlFor='passwordConfirm'>Confirmar contraseña</label>
                    <input
                        type='password'
                        id='passwordConfirm'
                        required
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                </div>
                <button type='submit'>Registrarse</button>
            </form>
            <section>
                <Link to='/login'>Iniciar sesión</Link>
                <Link to='/cambiarContrasena'>Olvidé mi contraseña</Link>
            </section>
        </div>
    );
};

export default SignupForm;
