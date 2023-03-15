import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postLogin } from '../client/authentication';
import { setToken, setAdminUserSaved } from '../utils/auth';
import '../styles/auth.css'
import jwtDecode from 'jwt-decode';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        postLogin(email, password)
        .then(data => {
            if (data.status === 'success') {
                const token = setToken(data.token);
                if (!token)
                    throw 'El token no pudo guardarse';
                const parsedToken = jwtDecode(token);
                setAdminUserSaved(parsedToken.id)
                .then(() => navigate('/'));
            }
        })
        .catch(error => {
            if (error.response.status === 401)
                alert(error.response.data.message);
            else
                alert('Ocurrió un error. Por favor intenta de nuevo.')
        });
    };

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
