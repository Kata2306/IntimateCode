const fetchProducts = async (filter) => {
    try {
      const url = "http://localhost:8080/products";
      //let url;
      const res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.error(error);
    }
  };
  
  export default fetchProducts;
  