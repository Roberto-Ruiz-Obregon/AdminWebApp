import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

export async function getPostalCode() {
    const result = await axios.get(`${baseApiEndpoint}/aggregations/zones-most-users`);
    return result.data.data;
}

export async function getInscriptions() {
    const result = await axios.get(
        `${baseApiEndpoint}/aggregations/inscriptions-by-zone`
    );
    return result.data.data;
}

export async function getTopics(postalCode) {
    try {
        const body = {
            postalCode: parseInt(postalCode),
        };
        const result = await axios.post(
            `${baseApiEndpoint}/aggregations/filter-topics`,
            body
        );
        console.log('resultados', result.data);
        return result.data.data;
    } catch (error) {
        console.error(error);
        throw new Error('No se recibieron datos');
    }
}

export async function filterInscriptions(postalCode) {
    try {
        const body = {
            postalCode: parseInt(postalCode),
        };
        console.log('body', body);
        const result = await axios.post(
            `${baseApiEndpoint}/aggregations/filter-inscriptions`,
            body
        );
        return result.data.data;
    } catch (error) {
        console.error(error);
        throw new Error('No se recibieron datos');
    }
}
