import React from 'react'
import "./products.css"

const Products = ({ title, image, specs, features, price }) => {
    return (
        <article>
            <div className='product__box'>
                <div className='product__left'>
                    {/* Image and buttons */}
                    <figure>
                        <img src={`./assets/${image}`} alt={title} className='product__image'></img>
                    </figure>
                    <button className='product__button'>View product</button>
                    <button className='product__button'>Add to cart</button>
                </div>
                <div className='product__right'>
                    {/* Information about the product */}
                    <h2 className='product__title'>{title}</h2>
                    <div className='product__dimensions'>
                        <h3>Dimensions:</h3>
                        <p>{specs.dimensions}</p>
                    </div>
                    <div className='product__features'>
                        <h3>Features:</h3>
                        <ul className='product__list'>
                            {features?.map((feature) => {
                                return <li className='product__item'>{feature}</li>
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