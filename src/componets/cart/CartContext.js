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

export { CartProvider, useCart };