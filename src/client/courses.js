import axios from 'axios';
import { objectToUrlQueryString } from '../utils/dataFormat';
const baseApiEndpoint = process.env.BASE_API_ENDPOINT;

/**
 * Gets registered courses
 * @returns An array of objects.
 */
export async function getAllCourses() {
    const endpoint = `${baseApiEndpoint}/course`;

    const response = await axios.get(endpoint);
    return response.data.data.documents;
}

/**
 * Asynchronously retrieves course document by id from the API
 * @param  {string} id - The id of the user document to retrieve.
 * @return {Object} Data object from the API call.
 */
export async function getCourseById(id) {
    const endpoint = `${baseApiEndpoint}/course/${id}`;
    const response = await axios.get(endpoint);
    return response.data.data.document;
}

/**
 * Asynchronously retrieves course inscriptions by course id from the API
 * @param  {string} id - The id of the course to retrieve its inscriptions.
 * @return {Object} Data object from the API call.
 */
export async function getInscriptionsByCourseById(id) {
    const endpoint = `${baseApiEndpoint}/course/getinscriptions/${id}`;
    const response = await axios.get(endpoint);
    return response.data.data.document;
}


/**
 * It deletes a course from the database.
 * @param id - The id of the course to delete
 */
export async function deleteCourse(id) {
    const endpoint = `${baseApiEndpoint}/course/${id}`;

    await axios.delete(endpoint);
}

/**
 * It modifies a course from the database.
 * !TO-DO
 * @param id - The id of the course to delete
 */
export async function updateCourse(id) {
    const endpoint = `${baseApiEndpoint}/course/${id}`;

    await axios.patch(endpoint);
}

