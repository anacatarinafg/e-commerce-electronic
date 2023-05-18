import { useState, useEffect } from 'react';
import { getCategories } from './fetcher';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from "./components/Cart/Cart";
import Categories from './components/Categories/Categories';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject)
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout categories={categories} />} >
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="categories/:categoryId"
            element={<Categories />}
          />
          <Route
            path="products/:productId"
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;