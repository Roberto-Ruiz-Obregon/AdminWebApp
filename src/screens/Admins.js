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

            FireSucess('El administrador ha sido verificado con éxito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };
    const handleDelete = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Está seguro de que quiere eliminar a este administrador?',
                'El perfil del administrador será eliminado de las solicitudes pendientes.',
                'Eliminar'
            );

            if (confirmation.isDismissed) return;

            await deleteAdmin(id);

            setAdmins(admins.filter((admin) => admin._id !== id));

            FireSucess('El administrador ha sido eliminado con éxito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <div className='admins-container'>
            <h4>Inicio / Administradores</h4>
            <div className='admins-list-container'>
                {admins.length > 0 ? (
                    admins.map((admin) => (
                        <AdminCard
                            admin={admin}
                            actionApprove={handleVerification}
                            actionDelete={handleDelete}
                        />
                    ))
                ) : (
                    <h4>No existen solicitudes de verificación pendientes</h4>
                )}
            </div>
        </div>
    );
}

export default Admins;
