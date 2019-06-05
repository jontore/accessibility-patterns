import React from 'react'
import { Link } from 'react-router-dom';

import CartList from '../cart/CartList';
import { useReceipt } from '../cart/CartContext';


function Receipt(props) {
  const [ list ] = useReceipt();
  return (
    <>
      <h1>receipt</h1>
      <p>
        Also sent to {props.email}
      </p>
      <CartList adjustable={false} list={list} />
      <Link to="/" className="button">Continue shopping</Link>
    </>
  )
}

export default Receipt;