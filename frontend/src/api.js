import axios from 'axios';

const fetchDataFromBackend = async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export { fetchDataFromBackend };
