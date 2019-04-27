import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'

function CartDisplay() {
  const [ list ] = useCart()
  return (
    <Link to="/checkout">
      <div>
        Items is cart {list.length}
      </div>
    </Link>
  );
}

export default CartDisplay;