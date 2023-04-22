import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

export async function getPostalCode() {

const result = await axios.get('http://localhost:3000/v1/aggregations/zones-most-users');
      return result.data.data;

}

export async function getInscriptions() {
    const result = await axios.get('http://localhost:3000/v1/aggregations/zones-most-inscriptions');
    const labels = result.data.map((zone) => zone.postalCode);
    const counts = result.data.map((zone) => zone.totalInscriptions);
    return { labels, data: counts };
  }
  



