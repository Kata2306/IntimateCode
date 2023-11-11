import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./CartPage.css";
import { NavLink } from "react-router-dom";
import Cart from "../../components/cart/Cart";

export default function CartPage() {
  return (
    <MainLayout>
      <Cart />
    </MainLayout>
  );
}
