import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

export async function postLogin(email, password) {
    const endpoint = `${baseApiEndpoint}/admin/auth/login`;
    const body = {
        email: email,
        password
    };
    const response = await axios.post(endpoint, body);
    return response.data;
}
