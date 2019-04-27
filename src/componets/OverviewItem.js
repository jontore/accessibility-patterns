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
    <>
      <Link to={`item/${id}`}>
        <h3>{name}</h3>
      </Link>
      <img
        src={`http://localhost:3000/images/${image.id}`}
        alt={image.alt}
      />
      <p>{description}</p>
      <p>Price: {price}</p>
      <AddToCart item={item} />
    </>
  )
}

export default OverviewItem;