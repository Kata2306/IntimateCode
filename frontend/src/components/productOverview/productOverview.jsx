import { useState } from "react";
import ProductsDisplay from "../productsDisplay/ProductsDisplay";
import BrandFilter from "../navbar/filterbar/brandFilter/BrandFilter";

export default function ProductOverview({ allProducts }) {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleBrandSelect = (brands) => {
    setSelectedBrands(brands);
  };

  // Filter products based on selected brands
  const filteredProducts = allProducts.filter(
    (product) =>
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand.toLowerCase()) // Convert to lowercase
  );

  return (
    <div>
      <BrandFilter
        onBrandSelect={handleBrandSelect}
        filteredProducts={filteredProducts}
      />
      <ProductsDisplay products={filteredProducts} />
    </div>
  );
}
