import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

/**
 * It makes a GET request to the endpoint `/course` and returns the response data.
 * @returns An array of objects.
 */
export async function getCourses() {
    const endpoint = `${baseApiEndpoint}/course`;

    const response = await axios.get(endpoint);
    return response.data.data.documents;
}

/**
 * It takes a topic object, sends it to the server, and returns the response.
 * @param course - {
 * @returns An array of topics.
 */
export async function postCourse(courseForm) {
    const endpoint = `${baseApiEndpoint}/course`;

    const response = await axios.post(endpoint, courseForm);
    return response.data.data.document;
}

/**
 * It takes an id, and then deletes the course with that id
 * @param id - The id of the course to delete
 */
export async function deleteCourse(id) {
    const endpoint = `${baseApiEndpoint}/course/${id}`;

    await axios.delete(endpoint);
}
