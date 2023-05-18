import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import { contextForCart } from '../../context/contextForCart';
import { UpIcon, HomeIcon, DownIcon, CartIcon, TrashIcon } from "../Icons";

const Cart = () => {
  const { getItems, clearProducts, increaseQuantity, decreaseQuantity, removeProduct } = useContext(contextForCart);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    setCartItems(getItems());
  }, [getItems]);

  const renderCart = () => {
    if (cartItems && cartItems.length > 0) {
      return cartItems.map((item) => (
        <React.Fragment key={item.id}>
          <Link to={`/products/${item.id}`} className='cart__link'>{item.title}</Link>
          <div className='cart__quantityDiv'>
            <h4 className='cart__quantity'>{item.quantity}</h4>
            <UpIcon key={`up-${item.id}`} width={20} onClick={() => increaseQuantity(item)} />
            <DownIcon key={`down-${item.id}`} width={20} onClick={() => decreaseQuantity(item)} />
            <TrashIcon key={`trash-${item.id}`} width={20} onClick={() => removeProduct(item)} />
          </div>
          <h4 className='cart__price' key={`price-${item.id}`}>{item.price}€</h4>
        </React.Fragment>
      ));
    } else {
      return <h1>The cart is currently empty.</h1>;
    }
  };


  const renderTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  };

  return (
    <div className='cart'>
      <h3 className='cart__headline'>Shopping cart</h3>
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
        <button className='cart__button cart__clear' onClick={clearProducts}>Clear</button>
        <p className='cart__total'>Total: {renderTotal()}€</p>
      </div>
    </div>
  )
}

export default Cart;