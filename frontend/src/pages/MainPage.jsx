import { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import NavBar from "../components/navbar/NavBar";
import { fetchDataFromBackend } from "../api";
import ProductOverview from "../components/productOverview/productOverview";

export default function MainPage() {
  const [products, setProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleBrandSelection = (brands) => {
    setSelectedBrands(brands);
  };

  const handleColorSelection = (pickedColors) => {
    setSelectedColors(pickedColors);
  };

  const handleTypeSelection = (pickedTypes) => {
    setSelectedTypes(pickedTypes);
  };

  // Filter products based on selected brands
  const filteredProducts = products.filter(
    (product) =>
      (selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand.toLowerCase())) && // Convert to lowercase
      (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
      (selectedTypes.length === 0 || selectedTypes.includes(product.category))
  );

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
      <NavBar
        filteredProducts={products}
        onBrandSelect={handleBrandSelection}
        onColorSelect={handleColorSelection}
        onTypeSelect={handleTypeSelection}
      />
      {products.length > 0 && (
        <ProductOverview allProducts={filteredProducts} />
      )}
    </MainLayout>
  );
}
