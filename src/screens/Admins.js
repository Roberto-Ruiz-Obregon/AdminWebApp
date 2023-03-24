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

    const handleVerification = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Está seguro de que quiere verificar a este administrador?',
                'Este administrador tendrá acceso a la administración si es verificado.',
                'Verificar'
            );

            if (confirmation.isDismissed) return;

            await verifyAdmin(id);

            setAdmins(admins.filter((admin) => admin._id !== id));

            FireSucess('El administrador ha sido verificado con exito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };
    const handleDelete = async (id) => {};

    return (
        <div className='admins-container'>
            <h4>Inicio / Administradores</h4>
            <div className='admins-list-container'>
                {admins.map((admin) => (
                    <AdminCard
                        admin={admin}
                        actionApprove={handleVerification}
                        actionDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default Admins;
