import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'

function CartDisplay() {
  const [ list ] = useCart()

  const totalCount = list.reduce((sum, item) => {
    return sum + item.count
  }, 0);

  return (
    <Link to="/checkout">
      <div>
        Items in cart {totalCount}
      </div>
    </Link>
  );
}

export default CartDisplay;