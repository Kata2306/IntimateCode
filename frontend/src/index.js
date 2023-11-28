import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProductPage from './pages/productPage/ProductPage';
import MainPage from './pages/MainPage';
import CartPage from './pages/cartPage/CartPage';
import LoginPage from './pages/loginPage/LoginPage';
import UserLogin from './components/userLogin/UserLogin';

const handleSendData = (data) => {
  //console.log(data);
  return data;
}

const data = handleSendData();

//console.log(data);


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage handleSendData={(e)=> handleSendData(e)}/>,
  },
  {
    path: "/cart",
    element: <CartPage cartItem={data}/>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/user",
    element: <UserLogin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
