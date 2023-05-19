import React, { useState, useEffect } from 'react';
import { getProductsBySearch } from '../../fetcher';
import { useSearchParams } from 'react-router-dom';
import Products from '../Products/Products';


const SearchResults = () => {
    const [products, setProducts] = useState({ errorMessage: '', data: [] })
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

export default SearchResults