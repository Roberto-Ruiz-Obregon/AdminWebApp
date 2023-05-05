import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

/**
 * It makes a GET request to the endpoint `/program` and returns the response data.
 * @returns An array of objects.
 */
export async function getPrograms(name = '', page = 1, limit = 8, category = '') {
    const endpoint = `${baseApiEndpoint}/program?programName[regex]=${name}&page=${page}&limit=${limit}&category[regex]=${category}`;

    const response = await axios.get(endpoint);
    return response.data.data.documents;
}

/**
 * Fetches a specific program from an API based on its ID.
 * @param {string|number} id - The ID of the program to retrieve from the API.
 * @returns {Promise<object>} - A Promise that resolves to an object representing the retrieved program.
 */
export async function getProgram(id) {
    const endpoint = `${baseApiEndpoint}/program/${id}`;

    const response = await axios.get(endpoint);
    return response.data.data.document;
}

/**
 * Updates a specific program in the API.
 * @param {string|number} id - The ID of the program to update.
 * @param {FormData} formData - The new data for the program in the form of a FormData object.
 * @returns {Promise<object>} - A Promise that resolves to an object representing the updated program.
 */
export async function patchProgram(id, formData) {
    const endpoint = `${baseApiEndpoint}/program/${id}`;

    const response = await axios.patch(endpoint, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data.data.document;
}

/**
 * Creates a new program in the API.
 * @param {FormData} formData - The data for the new program in the form of a FormData object.
 * @returns {Promise<object>} - A Promise that resolves to an object representing the newly created program.
 */
export async function postProgram(formData) {
    const endpoint = `${baseApiEndpoint}/program`;

    const response = await axios.post(endpoint, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data.data.document;
}

/**
 * Deletes a specific program from the API based on its ID.
 * @param {string|number} id - The ID of the program to delete from the API.
 * @returns {Promise<object>} - A Promise that resolves to an object representing the response from the API.
 */
export async function deleteProgram(id) {
    const endpoint = `${baseApiEndpoint}/program/${id}`;

    const response = await axios.delete(endpoint);
    return response;
}
