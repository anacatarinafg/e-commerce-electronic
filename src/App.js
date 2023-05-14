import { useState, useEffect } from 'react';
import Navbar from "../src/components/Navbar/Navbar";
import Categories from './components/Categories/Categories';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCategories(data);
      })
  }, []);

  const handleCategoryClick = id => {
    fetch("http://localhost:3001/products?catId=" + id)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    })
  }

  const renderCategories = () => {
    return categories.map(category =>
      <Categories key={category.id} id={category.id} title={category.title} onCategoryClick={() => handleCategoryClick(category.id)} />
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
          {categories && renderCategories()}
        </section>

      </main>

    </div >

  )
}

export default App;
