import { Link } from 'react-router-dom';
import React from 'react';

import AddToCart from './cart/AddToCart';

function OverviewItem({
  item
}) {
  const {
    name,
    description,
    price,
    id,
    image,
  } = item;
  return (
    <li className="item">
      <Link to={`/item/${id}`}>
        <h2>{name}</h2>
        <img
          src={`http://localhost:3000/images/${image.id}`}
          alt={image.alt}
          className="item--image"
          />
        <p>Price: {price}</p>
        <AddToCart item={item} />
      </Link>
    </li>
  )
}

export default OverviewItem;