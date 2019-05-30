import React from 'react'
import { Link } from 'react-router-dom';


import CartList from '../cart/CartList';

function Receipt(props) {
  return (
    <>
      <h1>receipt</h1>
      <p>
        Also sent to {props.email}
      </p>
      <CartList adjustable={false} />
      <Link to="/" className="button">Continue shopping</Link>
    </>
  )
}

export default Receipt;