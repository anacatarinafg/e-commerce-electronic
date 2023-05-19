import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import './layout.css';

const Layout = ({ categories }) => {
    const renderCategories = () => {
        return categories.data.map((category) => (
            <li key={category.id} className="categories__item"><Link to={`/categories/${category.id}`} className='categories__link'>{category.title}</Link></li>
        ));
    };
    return (
        <>
            <navbar>
                <Navbar />
            </navbar>

            {/* MAIN THAT CONTAINS CATEGORY AND PRODUCTS AND EVERYTHING RELATED TO PRODUCTS */}
            <main>
                <section className='categories__box'>
                    {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
                    <ul className='categories__list'>
                        {categories.data && renderCategories()}
                    </ul>

                </section>
                <section className='products'>
                    <Outlet />
                </section>
            </main>
        </>

    )
}

export default Layout