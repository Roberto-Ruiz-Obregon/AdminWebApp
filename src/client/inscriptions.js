import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

/**
 * This function deletes an inscription from the database.
 * @param id - the id of the inscription to delete
 */
export async function deleteInscription(id) {
    const endpoint = `${baseApiEndpoint}/inscription/${id}`;

    await axios.delete(endpoint);
}
