import React from 'react'
import { useCart  } from './CartContext';

function AddToCart({ item }) {
  const [list, addToList] = useCart()
  const add = () => {
    addToList(items => [...items, item]);
  }
  return <button onClick={add}>Add to cart {item.price}</button>
}

export default AddToCart;