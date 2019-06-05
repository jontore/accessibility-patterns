import React from 'react'
import { Link } from 'react-router-dom';
import { useCart, removeFromCart, addToCart } from './CartContext'

import CartList from './CartList';

function CartCheckout() {
  const [ list, setList ] = useCart();

  return (
    <>
      <h2>What is in your cart</h2>
      {list.length === 0 ? <p>Your cart is empty</p> :
        <>
          <CartList list={list} add={(i) => addToCart(i, list, setList)} remove={(i) => removeFromCart(i, list, setList)} />
          <Link className="button button__full" to="/payment/contact">go pay</Link>
        </>
      }
    </>
  );
}

export default CartCheckout;