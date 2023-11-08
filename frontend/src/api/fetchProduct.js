import axios from 'axios';

const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(`http://localhost:8080/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export { fetchProduct };
