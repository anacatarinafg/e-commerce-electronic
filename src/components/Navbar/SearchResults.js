import React, { useState, useEffect } from 'react';
import { getProductsBySearch } from '../../fetcher';
import { useSearchParams } from 'react-router-dom';
import Products from '../Products/Products';

const SearchResults = () => {
    const [products, setProducts] = useState({ errorMessage: '', data: [] });
    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductsBySearch(query);
            setProducts(responseObject);
        };
        fetchData();
    }, [query]);

    const renderProducts = () => {
        if (products.data.length > 0) {
            return products.data.map((product) => (
                <Products key={product.id} {...product} />
            ));
        } else {
            return <div>There's no products with those parameters.</div>;
        }
    };

    return (
        <section>
            {products.errorMessage && <div>Error: {products.errorMessage}</div>}
            {renderProducts()}
        </section>
    );
};

export default SearchResults;