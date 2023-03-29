import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

/**
 * Sends a POST request to the '/admin/auth/login' endpoint with the provided email and password as the request body.
 * 
 * @param {string} email - The email of the user attempting to log in.
 * @param {string} password - The password of the user attempting to log in.
 * @returns {Promise} - A Promise object that resolves to the data returned by the server.
 */
export async function postLogin(email, password) {
    const endpoint = `${baseApiEndpoint}/admin/auth/login`;
    const body = {
        email: email,
        password: password
    };
    const response = await axios.post(endpoint, body);
    return response.data;
}

/**
 * Sends a POST request to the '/admin/auth/signup' endpoint with the provided data as the request body.
 * 
 * @param {Object} data - An object containing the data needed to create a new user account. 
 * @returns {Promise} - A Promise object that resolves to the data returned by the server.
 */
export async function postSignup(data) {
    const endpoint = `${baseApiEndpoint}/admin/auth/signup`;
    const response = await axios.post(endpoint, data);
    return response.data;
}