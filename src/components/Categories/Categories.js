import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../fetcher';
import Products from '../Products/Products';
import './categories.css';

const Categories = () => {
    const [products, setProducts] = useState({ errorMessage: '', data: [] })
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProducts(categoryId);
            setProducts(responseObject);
        };
        fetchData();
    }, [categoryId]);

    const renderProducts = () => {
        return products.data.map((product) => (
            <Products key={product.id} {...product} />
        ));
    };

    return (
        <section>
            {products.errorMessage && <div>Error: {products.errorMessage}</div>}
            {products.data && renderProducts()}
        </section>
    )
}

export default Categories