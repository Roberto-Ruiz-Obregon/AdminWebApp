import React, { useState, useEffect } from 'react';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import { getUnverifiedAdmins, verifyAdmin, deleteAdmin } from '../client/admin';
import AdminCard from '../components/AdminCard';
import '../styles/admin.css';

export function Admins() {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const admins = await getUnverifiedAdmins();

                setAdmins(admins);
            } catch (error) {
                FireError(error.response.message);
            }
        })();
    }, []);

    return (
        <div className='admins-container'>
            <h4>Inicio / Administradores</h4>
            <div className='admins-list-container'>
                {admins.map((admin) => (
                    <AdminCard
                        admin={admin}
                        actionApprove={(id) => {}}
                        actionDelete={(id) => {}}
                    />
                ))}
            </div>
        </div>
    );
}

export default Admins;
