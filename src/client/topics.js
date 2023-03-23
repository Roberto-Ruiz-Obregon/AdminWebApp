import axios from 'axios';
import { FireError } from '../utils/alertHandler';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

/**
 * It makes a GET request to the endpoint `/topics` and returns the response data.
 * @returns An array of objects.
 */
export async function getTopics() {
    const endpoint = `${baseApiEndpoint}/topics`;

    const response = await axios.get(endpoint);
    return response.data.data.documents;
}

/**
 * It takes a topic object, sends it to the server, and returns the response.
 * @param topic - {
 * @returns An array of topics.
 */
export async function postTopic(topic) {
    const endpoint = `${baseApiEndpoint}/topics`;

    const response = await axios.post(endpoint, { topic });
    return response.data.data.document;
}
