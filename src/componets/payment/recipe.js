import React from 'react'

import CartList from '../cart/CartList';

function Recipe(props) {
  return (
    <>
      <h1>recipe</h1>
      <ul>
        <CartList />
      </ul>
    </>
  )
}

export default Recipe;