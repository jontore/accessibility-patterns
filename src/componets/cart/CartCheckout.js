import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'

import CartList from './CartList';

function CartCheckout() {
  const [ list ] = useCart()
  const totalPrice = list.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <>
      <h2>What is in your cart</h2>
      {list.length === 0 ? <p>Your cart is empty</p> :
        <>
          <CartList />
          <Link className="button button__full" to="/payment/contact">go pay</Link>
        </>
      }
    </>
  );
}

export default CartCheckout;