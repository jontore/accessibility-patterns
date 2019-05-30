import React from 'react'

const CartContext = React.createContext()

function useCart() {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`)
  }
  return context
}

function CartProvider(props) {
  const [list, addToList] = React.useState([])
  const value = React.useMemo(() => [list, addToList], [list])
  return <CartContext.Provider value={value} {...props} />
}


function addToCart(item, list, addToList) {
  const alreadyInList = list.find(({ id }) => id === item.id);
  const notMatchList = list.filter(({ id }) => id !== item.id);
  if (alreadyInList) {
    alreadyInList.count += 1;
    addToList(items => [...notMatchList, alreadyInList]);
  } else {
    addToList(items => [...items, {...item, count: 1 }]);
  }
}

function removeFromCart(item, list, addToList) {
  const alreadyInList = list.find(({ id }) => id === item.id);
  const notMatchList = list.filter(({ id }) => id !== item.id);
  if (alreadyInList) {
    if (alreadyInList.count === 1) {
      addToList(items => [...notMatchList]);  
    } else {
      alreadyInList.count -= 1;
      addToList(items => [...notMatchList, alreadyInList]);
    }
  }
}

export { CartProvider, useCart, addToCart, removeFromCart };