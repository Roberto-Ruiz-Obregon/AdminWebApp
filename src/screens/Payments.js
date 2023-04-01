import React, { useState, useEffect } from 'react';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import { getPayments, acceptPayment, declinePayment } from '../client/payment';
import PaymentCard from '../components/PaymentCard';

import '../styles/payments.css';

function Payments() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const payments = await getPayments();

                setPayments(payments);
            } catch (error) {
                FireError(error.response.data.message);
            }
        })();
    }, []);

    const handleAccept = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Está seguro de que desea aceptar este pado?',
                'El usuario sera notificado y se registrara su inscripcion al curso.'
            );

            if (confirmation.isDismissed) return;

            await acceptPayment(id);

            setPayments(payments.filter((payment) => payment._id !== id));

            FireSucess('Pago aprobado con exito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    const hanldeDecline = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Está seguro de que desea rechazar este pado?',
                'El usuario sera notificado y se eliminara su peticion de pago.'
            );

            if (confirmation.isDismissed) return;

            await declinePayment(id);

            setPayments(payments.filter((payment) => payment._id !== id));

            FireSucess('Pago declinado con exito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <div className='payments-container'>
            <h4>Inicio / Pagos pendientes de aprobar</h4>
            <h2>Pagos pendientes</h2>
            <div className='payment-cards-container'>
                {payments.length > 0 ? (
                    payments.map((payment) => (
                        <PaymentCard
                            payment={payment}
                            handleAccept={handleAccept}
                            handleDecline={hanldeDecline}
                        />
                    ))
                ) : (
                    <h3>Sin pagos por aprobar</h3>
                )}
            </div>
        </div>
    );
}

export default Payments;
