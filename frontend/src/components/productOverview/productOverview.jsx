import { useState } from "react";
import ProductsDisplay from "../productsDisplay/ProductsDisplay";

export default function ProductOverview({ allProducts }) {
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Filter products based on selected brands
  const filteredProducts = allProducts.filter(
    (product) =>
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand.toLowerCase()) // Convert to lowercase
  );

  return (
    <div>
      <ProductsDisplay products={filteredProducts} />
    </div>
  );
}
