import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'

function CartCheckout() {
  const [ list ] = useCart()
  const totalPrice = list.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  return (
    <> 
      <h2>Checkout</h2>
      <ul>
        {list.map(i => {
          return (
          <li key={`checkout-cart-${i.id}`}>
            <h2>{i.name}</h2>
            <p>Price: {i.price}</p>
          </li>
          );
        })}
      </ul>
      To pay{totalPrice}

      <Link to="/payment/contact">Pay</Link>
    </>
  );
}

export default CartCheckout;