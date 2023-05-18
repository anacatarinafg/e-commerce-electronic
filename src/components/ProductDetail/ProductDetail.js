import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { contextForCart } from '../../context/contextForCart';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../fetcher';
import "./productdetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({ errorMessage: '', data: {} });
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addProduct } = useContext(contextForCart);
  console.log(productId);

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    };
    fetchData();
  }, [productId]);

  return (
    <article>
      <div className='productDetail__box'>
        <div className='productDetail__up'>
          {/* Image and title */}
          <h3>{product.data.title}</h3>
          <figure>
            <img src={`/assets/${product.data.image}`} alt={product.data.title} className='productDetail__image'></img>
          </figure>
        </div>
        <div className='productDetail__down'>
          {/* Information about the product */}
          <span className='productDetail__price'>{product.data.price}€</span>
          <button className='productDetail__button' onClick={() => addProduct({ ...product.data })}>Add to cart</button>
          <div className='productDetail__dimensions'>
            <h3>Dimensions:</h3>
            <p>{product.data.specs?.dimensions}</p>
          </div>
          <div className='productDetail__features'>
            <h3>Features:</h3>
            <ul className='productDetail__list'>
              {product.data.features?.map((feature, index) => (
                <li className='productDetail__item' key={`feature${index}`}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className='productDetail__description'>{product.data?.description}</div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;