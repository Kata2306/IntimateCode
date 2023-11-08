import { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import ProductsDisplay from "../components/productsDisplay/ProductsDisplay";
import NavBar from "../components/navbar/NavBar";
import { fetchDataFromBackend } from "../api";

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
      <ProductsDisplay products={{ products }} />
    </MainLayout>
  );
}
