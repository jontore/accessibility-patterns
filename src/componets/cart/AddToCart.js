import React from 'react'
import { useCart, addToCart  } from './CartContext';

function AddToCart({ item }) {
  const [list, setList] = useCart()
  const add = (e) => {
    addToCart(item, list, setList);
    e.preventDefault();
  }
  return <button className="button" onClick={add}>Add to cart</button>
}

export default AddToCart;