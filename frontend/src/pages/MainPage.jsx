import { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import NavBar from "../components/navbar/NavBar";
import { fetchDataFromBackend } from "../api";
import ProductOverview from "../components/productOverview/productOverview";

export default function MainPage() {
  const [products, setProducts] = useState([]);

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
      <NavBar />
      {products.length > 0 && <ProductOverview allProducts={products} />}
    </MainLayout>
  );
}
