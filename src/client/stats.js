import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

export async function getPostalCode() {

const result = await axios.get('http://localhost:3000/v1/aggregations/zones-most-users');
      const data = result.data.data;

}