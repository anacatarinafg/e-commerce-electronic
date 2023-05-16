import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

const Layout = ({ categories }) => {
    const renderCategories = () => {
        return categories.data.map((category) => (
            <li key={category.id}><Link to={`/categories/${category.id}`}>{category.title}</Link></li>
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
                    <ul>
                        {categories.data && renderCategories()}
                    </ul>

                </section>
                <section className='products'>
                    <h1 className='products__headline'>Products:</h1>
                    <Outlet />
                </section>
            </main>
        </>

    )
}

export default Layout