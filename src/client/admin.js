import axios from 'axios';
import { objectToUrlQueryString } from '../utils/dataFormat';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

/**
 * Asynchronously retrieves an admin user document by id from the API
 * @param  {string} id - The id of the user document to retrieve.
 * @param  {object} [params={}] - An optional object containing query parameters to append to the request url.
 * @return {Object} Data object from the API call.
 */
export async function retreiveAdmin(id, params = {}) {
    const queryString = objectToUrlQueryString(params);
    const endpoint = `${baseApiEndpoint}/admin/${id}?${queryString}`;
    const response = await axios.get(endpoint);
    return response.data.data.document;
}

export async function sendChangePasswordEmail(email) {
    const endpoint = `${baseApiEndpoint}/admin/forgotpassword`;
    const body = { email }
    const response = await axios.post(endpoint, body);
    console.log(response.data);
    return response.data;
}

/**
 * It gets all the admins that have not been verified
 * @returns An array of objects.
 */
export async function getUnverifiedAdmins() {
    const endpoint = `${baseApiEndpoint}/admin?hasVerification=false`;

    const response = await axios.get(endpoint);
    return response.data.data.documents;
}

/**
 * It takes an id as a parameter, and then it makes a request to the server to update the document with
 * that id.
 * @param id - The id of the admin to be verified
 * @returns The response.data.data.document is the document that was updated.
 */
export async function verifyAdmin(id) {
    const endpoint = `${baseApiEndpoint}/admin/${id}`;

    const response = await axios.patch(endpoint, { hasVerification: true });
    return response.data.data.document;
}

/**
 * It deletes an admin from the database.
 * @param id - The id of the admin to delete
 */
export async function deleteAdmin(id) {
    const endpoint = `${baseApiEndpoint}/admin/${id}`;

    await axios.delete(endpoint);
}
