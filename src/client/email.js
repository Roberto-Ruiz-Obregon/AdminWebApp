import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

/**
 * It sends an email to everyone in the database.
 * @param form - FormData object containing email information
 */
export async function sendEmailToEveryone(form) {
    const endpoint = `${baseApiEndpoint}/emails/emailToEveryone`;

    await axios.post(endpoint, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
}

/**
 * It sends a POST request to the endpoint with the form data and the header 'Content-Type':
 * 'multipart/form-data'
 * @param form - FormData object containing email information
 */
export async function sendEmailByZone(form) {
    const endpoint = `${baseApiEndpoint}/emails/emailByZone`;

    await axios.post(endpoint, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
}
