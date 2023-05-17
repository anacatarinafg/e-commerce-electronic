import React, { useContext } from 'react';
import {
    Link,
    useNavigate
} from 'react-router-dom';
import "./products.css";

import { contextForCart } from '../../context/contextForCart';

const Products = ({ id, title, image, specs, features, price }) => {
    const navigate = useNavigate();
    const { addProduct } = useContext(contextForCart);
    return (
        <article>
            <div className='product__box'>
                <div className='product__left'>
                    {/* Image and buttons */}
                    <figure>
                        <img src={`/assets/${image}`} alt={title} className='product__image'></img>
                    </figure>
                    <button className='product__button' onClick={() => navigate(`/products/${id}`)}>View product</button>
                    <button className='product__button' onClick={() => addProduct({ id, title, price })}>Add to cart</button>
                </div>
                <div className='product__right'>
                    {/* Information about the product */}
                    <Link to={`/products/${id}`}>{title}</Link>
                    <div className='product__dimensions'>
                        <h3>Dimensions:</h3>
                        <p>{specs.dimensions}</p>
                    </div>
                    <div className='product__features'>
                        <h3>Features:</h3>
                        <ul className='product__list'>
                            {features?.map((feature, index) => {
                                return <li className='product__item' key={`feature${index}`}>{feature}</li>
                            })}
                        </ul>
                    </div>
                    <span className='product__price'>{price}</span>
                </div>
            </div>
        </article>
    )
}

export default Products