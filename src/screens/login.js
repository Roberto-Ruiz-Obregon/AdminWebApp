import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { postLogin } from '../client/authentication';
import { setToken, setAdminUserSaved, isAuthenticated } from '../utils/auth';
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
                setToken(response.token);
                setAdminUserSaved(response.data.user);
                navigate('/');
            }
        }
        catch (error) {
            if (error.response.status === 401)
                alert(error.response.data.message);
            else
                alert('Ocurrió un error. Por favor intenta de nuevo.');
        }
    };

    if (isAuthenticated())
        return <Navigate to="/" />

    return (
        <div className="auth-container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
            <div>
                <Link to="/signin">Registrarse</Link>
                <br />
                <a href="#">Olvidé mi contraseña</a>
            </div>
        </div>
    );
}

export default LoginForm;
