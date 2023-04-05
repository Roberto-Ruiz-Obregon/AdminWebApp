import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

/**
 * This function makes a GET request to the /payment endpoint of the API, and returns the
 * data.documents property of the response.
 * @returns An array of objects.
 */
export async function getPayments() {
    const endpoint = `${baseApiEndpoint}/payment?status=Pendiente`;

    const response = await axios.get(endpoint);
    return response.data.data.documents;
}

/**
 * It accepts a payment ID, and returns a document.
 * @param id - the id of the payment
 * @returns The response.data.data.document is the data that is being returned.
 */
export async function acceptPayment(id) {
    const endpoint = `${baseApiEndpoint}/payment/acceptPayment`;

    await axios.post(endpoint, { paymentId: id });
}

/**
 * Decline a payment by id
 * @param id - the id of the payment
 * @returns The response is an object with a data property that contains a document property.
 */
export async function declinePayment(id) {
    const endpoint = `${baseApiEndpoint}/payment/declinePayment`;

    await axios.post(endpoint, { paymentId: id });
}
