import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import routes from './routes';
import './styles/style.css';

function App() {
    return (
        <div id='app-container'>
            <div id='app-base-layout'>
                <Routes>
                    {routes.map((route) =>
                        route.isPrivate ? (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <PrivateRoute>
                                        <Navbar />
                                        <route.Component />
                                    </PrivateRoute>
                                }
                            />
                        ) : (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.Component />}
                            />
                        )
                    )}
                </Routes>
            </div>
        </div>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
