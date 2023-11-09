import { useState, useEffect } from "react";
import ProductsDisplay from "./ProductsDisplay";
import BrandFilter from "./BrandFilter";

export default function ProductsPage({ products }) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleBrandSelect = (selectedBrands) => {
    setSelectedBrands(selectedBrands);
  };

  // those console.logs never appear, the sortering is not happenings
  useEffect(() => {
    console.log("Selected brands: ", selectedBrands);
    console.log("All products: ", products);

    const updatedFilteredProducts = products.filter(
      (product) =>
        selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    );

    setFilteredProducts(updatedFilteredProducts);
    console.log("Filtered products: ", updatedFilteredProducts);
  }, [selectedBrands, products]);

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
