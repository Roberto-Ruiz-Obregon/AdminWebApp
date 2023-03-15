import axios from 'axios';
// const baseApiEndpoint = process.env.BASE_API_ENDPOINT;‘
const baseApiEndpoint = 'https://us-central1-robertoruiz-eca78.cloudfunctions.net/api/v1';

export async function postLogin(email, password) {
    const endpoint = `${baseApiEndpoint}/admin/auth/login`;
    const body = {
        email: email,
        password
    };
    const response = await axios.post(endpoint, body);
    return response.data;
}
