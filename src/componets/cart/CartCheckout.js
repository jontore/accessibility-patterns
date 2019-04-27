import React from 'react'
import { useCart } from './CartContext'

function CartCheckout() {
  const [ list ] = useCart()
  console.log('------', list);
  return (
    <> 
      <h2>Checkout</h2>
      <ul>
        {list.map(i => {
          return (
          <li key={`checkout-cart-${i.id}`}>
            <h2>{i.name}</h2>
            <p>{i.price}</p>
          </li>
          );
        })}
      </ul>
    </>
  );
}

export default CartCheckout;