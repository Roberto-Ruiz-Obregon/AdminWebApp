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
                '¿Está seguro de que desea aceptar este pago?',
                'El usuario será notificado y se registrará su inscripción al curso.'
            );

            if (confirmation.isDismissed) return;

            await acceptPayment(id);

            setPayments(payments.filter((payment) => payment._id !== id));

            FireSucess('Pago aprobado con éxito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    const handleDecline = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Está seguro de que desea rechazar este pago?',
                'El usuario será notificado y se eliminará su petición de pago.'
            );

            if (confirmation.isDismissed) return;

            await declinePayment(id);

            setPayments(payments.filter((payment) => payment._id !== id));

            FireSucess('Pago declinado con éxito.');
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
                            key={payment._id}
                            payment={payment}
                            handleAccept={handleAccept}
                            handleDecline={handleDecline}
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
