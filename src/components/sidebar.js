import React from 'react';
import '../styles/style.css';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../routes';

// navigation bar at the top
function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            {routes
                .filter((route) => route.isPrivate)
                .map((route) => (
                    <button
                        className='navbar-button'
                        id='inicio_btn'
                        onClick={() => navigate(route.path)}>
                        {route.name}
                    </button>
                ))}
        </div>
    );
}

export default Navbar;
