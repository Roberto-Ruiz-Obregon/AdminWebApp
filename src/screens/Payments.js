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

    const handleAccept = async (id) => {};
    const hanldeDecline = async (id) => {};

    return (
        <div className='payments-container'>
            <h4>Inicio / Pagos pendientes de aprobar</h4>
            <h2>Pagos pendientes</h2>
            <div className='payments-container'>
                {payments.map((payment) => (
                    <PaymentCard
                        payment={payment}
                        handleAccept={handleAccept}
                        hanldeDecline={hanldeDecline}
                    />
                ))}
            </div>
        </div>
    );
}

export default Payments;
