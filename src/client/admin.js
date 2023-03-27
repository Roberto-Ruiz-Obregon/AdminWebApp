import axios from 'axios';
import { objectToUrlQueryString } from '../utils/dataFormat';
// const baseApiEndpoint = process.env.BASE_API_ENDPOINT;‘
const baseApiEndpoint = 'https://us-central1-robertoruiz-eca78.cloudfunctions.net/api/v1';

/**
 * Asynchronously retrieves an admin user document by id from the API
 * @param  {string} id - The id of the user document to retrieve.
 * @param  {object} [params={}] - An optional object containing query parameters to append to the request url.
 * @return {Object} Data object from the API call.
 */
export async function retreiveAdmin(id, params={}) {
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
