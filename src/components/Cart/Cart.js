import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cart.css';
import { contextForCart } from '../../context/contextForCart';

const Cart = () => {
  const navigate = useNavigate();
  const { getItems } = useContext(contextForCart);

  const renderCart = () => {
    const cartItems = getItems();
    if (cartItems.length > 0) {
      return cartItems.map((item) => (
        <React.Fragment key={item.id}>
          <div>
            <Link to={`/products/${item.id}`} className='cart__link'>{item.title}</Link>
          </div>
          <h4 className='cart__quantity'>{item.quantity}</h4>
          <h4 className='cart__price'>{item.price}€</h4>
        </React.Fragment>
      ));
    } else {
      return <h1>The cart is currently empty.</h1>;
    }
  };
  return (
    <div className='cart'>
      <h3 className='cart__headline'>Shopping cart</h3>
      <button className='cart__button'>Checkout</button>
      <div className='cart__products'>
        <div className='cart__titles'>
          <h4 className='cart__title'>Item</h4>
          <h4 className='cart__title'>Quantity</h4>
          <h4 className='cart__title'>Price</h4>
        </div>
        {/* ADD UNDERLINE */}
        <div className='cart__titles'>
          {renderCart()}
        </div>
        {/* ADD UNDERLINE */}
        <button className='cart__button cart__clear'>Clear</button>
        <p className='cart__total'>Total: </p>
      </div>
    </div>
  )
}

export default Cart