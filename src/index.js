import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
