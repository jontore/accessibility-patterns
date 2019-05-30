import React from 'react'
import { useCart, addToCart  } from './CartContext';

function AddToCart({ item }) {
  const [list, addToList] = useCart()
  const add = (e) => {
    addToCart(item, list, addToList);
    e.preventDefault();
  }
  return <button className="button" onClick={add}>Add to cart {item.price}</button>
}

export default AddToCart;