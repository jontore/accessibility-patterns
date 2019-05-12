import React from 'react'
import { useCart  } from './CartContext';

function AddToCart({ item }) {
  const [list, addToList] = useCart()
  const add = (e) => {
    const alreadyInList = list.find(({ id }) => id === item.id);
    const notMatchList = list.filter(({ id }) => id !== item.id);
    if (alreadyInList) {
      alreadyInList.count += 1;
      addToList(items => [...notMatchList, alreadyInList]);
    } else {
      addToList(items => [...items, {...item, count: 1 }]);
    }
    e.preventDefault();
  }
  return <button className="button" onClick={add}>Add to cart {item.price}</button>
}

export default AddToCart;