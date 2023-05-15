import { useState, useEffect } from 'react';

import Navbar from "../src/components/Navbar/Navbar";
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

import { getCategories, getProducts } from './fetcher';
import './App.css';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject)
    }
    fetchData();
  }, []);

  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject)
    }
    fetchData();
  }

  const renderCategories = () => {
    return categories.data.map(category =>
      <Categories key={category.id} id={category.id} title={category.title} onCategoryClick={() => handleCategoryClick(category.id)} />
    )
  }

  const renderProducts = () => {
    return products.data.map(product =>
      <Products {...product} />
    )
  }

  return (
    <div className="App">
      {/* NAVBAR THAT CONTAINS LOGO, SEARCHBAR & CART */}
      <navbar>
        <Navbar />
      </navbar>

      {/* MAIN THAT CONTAINS CATEGORY AND PRODUCTS AND EVERYTHING RELATED TO PRODUCTS */}
      <main>
        <section className='categories__box'>
          {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
          {categories.data && renderCategories()}
        </section>
        <section className='products'>
          <h1 className='products__headline'>Products:</h1>
          {products.errorMessage && <div>Error: {products.errorMessage}</div>}
          {products.data && renderProducts()}
        </section>
      </main>

    </div >

  )
}

export default App;
