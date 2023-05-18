import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cart.css';
import { contextForCart } from '../../context/contextForCart';
import { UpIcon, HomeIcon, DownIcon, CartIcon, TrashIcon } from "../Icons";

const Cart = () => {
  const navigate = useNavigate();
  const { getItems, clearProducts, increaseQuantity, decreaseQuantity, removeProduct } = useContext(contextForCart);

  const renderCart = () => {
    const cartItems = getItems();
    if (cartItems.length > 0) {
      return cartItems.map((item) => (
        <React.Fragment key={item.id}>
          <div>
            <Link to={`/products/${item.id}`} className='cart__link'>{item.title}</Link>
          </div>
          <div className='cart__quantityDiv'>
            <h4 className='cart__quantity'>{item.quantity}</h4>
            <UpIcon width={20} onClick={() => increaseQuantity({ id: item.id })} />
            <DownIcon width={20} onClick={() => decreaseQuantity({ id: item.id })} />
            <TrashIcon width={20} onClick={() => removeProduct({ id: item.id })} />
          </div>
          <h4 className='cart__price'>{item.price}€</h4>
        </React.Fragment>
      ));
    } else {
      return <h1>The cart is currently empty.</h1>;
    }
  };

  const renderTotal = () => {
    const cartItems = getItems();

    const totalPrice = cartItems.reduce((totalPrice, item) => (totalPrice + item.price * item.quantity), 0)
    return totalPrice;
  }
  return (
    <div className='cart'>
      <h3 className='cart__headline'>Shopping cart</h3>
      <button className='cart__button' onClick={() => navigate("/checkout")}>Checkout</button>
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
        <button className='cart__button cart__clear' onClick={() => clearProducts()}>Clear</button>
        <p className='cart__total'>Total: {renderTotal()}€</p>
      </div>
    </div>
  )
}

export default Cart