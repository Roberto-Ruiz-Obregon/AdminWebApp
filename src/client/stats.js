import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

export async function getPostalCode() {

const result = await axios.get('http://localhost:3000/v1/aggregations/zones-most-users');
      return result.data.data;

}

export async function getInscriptions() {
    const result = await axios.get('http://localhost:3000/v1/aggregations/inscriptions-by-zone');
    return result.data.data;
  }

  export async function getTopics(postalCode) {
    const body = {
      postalCode: postalCode,
    }
    const result = await axios.post('http://localhost:3000/v1/aggregations/filter-topics', {postalCode, body});
    return result.data.data;
  }


