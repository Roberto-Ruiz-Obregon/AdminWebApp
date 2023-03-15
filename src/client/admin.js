import axios from 'axios';
import { objectToUrlQueryString } from '../utils/dataFormat';
// const baseApiEndpoint = process.env.BASE_API_ENDPOINT;‘
const baseApiEndpoint = 'https://us-central1-robertoruiz-eca78.cloudfunctions.net/api/v1';

export async function retreiveAdmin(id, params={}) {
    const queryString = objectToUrlQueryString(params);
    const endpoint = `${baseApiEndpoint}/admin/${id}?${queryString}`;
    const response = await axios.get(endpoint);
    return response.data;
}
