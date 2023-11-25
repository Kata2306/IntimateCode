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
  const [selectedSort, setSelectedSort] = useState();
  const [selectedLetters, setSelectedLetters] = useState();

  const handleBrandSelection = (brands) => {
    setSelectedBrands(brands);
  };

  const handleColorSelection = (pickedColors) => {
    setSelectedColors(pickedColors);
  };

  const handleTypeSelection = (pickedTypes) => {
    setSelectedTypes(pickedTypes);
  };

  const handleSort = (pickedSort) => {
    setSelectedSort(pickedSort);
  };

  const handleSearch = (letter) => {
    const regexPattern = new RegExp(`\\w*${letter}\\w*`, 'i'); // 'i' flag for case-insensitive search
    setSelectedLetters(regexPattern);
  };
  
  // Filter products based on selected brands, colors, types, and letters
  const filteredProducts = products.filter((product) => {
    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand.toLowerCase());
  
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(product.color);
  
    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(product.category);
  
    const letterMatch =
      !selectedLetters ||
      (selectedLetters instanceof RegExp &&
        (product.name.match(selectedLetters) ||
          product.category.match(selectedLetters))) ||
      (typeof selectedLetters === 'string' &&
        (product.name.toLowerCase().includes(selectedLetters.toLowerCase()) ||
          product.category.toLowerCase().includes(selectedLetters.toLowerCase())));
  
    return brandMatch && colorMatch && typeMatch && letterMatch;
  });

  let sortedProducts;

  switch (selectedSort) {
    case "Price (low-high)":
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      break;
    case "Price (high-low)":
      sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
      break;
    case "Best rating":
      sortedProducts = [...filteredProducts].sort(
        (a, b) => b.rating - a.rating
      );
      break;
    default:
      sortedProducts = filteredProducts;
  }

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
        onSort={handleSort}
        onSearch={handleSearch}
      />
      {products.length > 0 && <ProductOverview allProducts={sortedProducts} />}
    </MainLayout>
  );
}
