import { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import ProductsDisplay from "../components/productsDisplay/ProductsDisplay";
import NavBar from "../components/navbar/NavBar";
import { fetchDataFromBackend } from "../api";

export default function MainPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([products]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleBrandSelection = (brands) => {
    setSelectedBrands(brands);
  };

  console.log(selectedBrands);
  console.log(products);


  // Filter products based on selected brands
    const filterProducts = products.filter(
      (product) =>
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand) // Convert to lowercase
    );

    console.log(filterProducts);

  console.log(filteredProducts);

  //const returnProducts = selectedBrands.length > 0 ? setFilteredProducts(filterProducts) : setFilteredProducts(products);
  //console.log(returnProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBackend();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);



  return (
    <MainLayout>
      <NavBar onBrandSelect={handleBrandSelection}/>
      <ProductsDisplay products={{ products }} />
    </MainLayout>
  );
}
