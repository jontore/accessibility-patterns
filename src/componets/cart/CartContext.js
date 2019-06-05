import React from 'react'

const CartContext = React.createContext()
const ReceiptContext = React.createContext()

function useCart() {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`)
  }
  return context
}

function useReceipt() {
  const context = React.useContext(ReceiptContext)
  if (!context) {
    throw new Error(`useReceipt must be used within a ReceiptProvider`)
  }
  return context
}

function CartProvider(props) {
  const [list, setList] = React.useState([])
  const value = React.useMemo(() => [list, setList], [list])

  return <CartContext.Provider value={value} {...props} />
}

function ReceiptProvider(props) {
  const [list, setList] = React.useState([])
  const value = React.useMemo(() => [list, setList], [list])

  return <ReceiptContext.Provider value={value} {...props} />
}




function addToCart(item, list, setList) {
  const alreadyInList = list.find(({ id }) => id === item.id);
  const notMatchList = list.filter(({ id }) => id !== item.id);
  if (alreadyInList) {
    alreadyInList.count += 1;
    setList(items => [...notMatchList, alreadyInList]);
  } else {
    setList(items => [...items, {...item, count: 1 }]);
  }
}

function removeFromCart(item, list, setList) {
  const alreadyInList = list.find(({ id }) => id === item.id);
  const notMatchList = list.filter(({ id }) => id !== item.id);
  if (alreadyInList) {
    if (alreadyInList.count === 1) {
      setList(items => [...notMatchList]);  
    } else {
      alreadyInList.count -= 1;
      setList(items => [...notMatchList, alreadyInList]);
    }
  }
}

function emtpyCart(setList) {
  setList(items => []);
}

export { CartProvider, ReceiptProvider, useCart, useReceipt, addToCart, removeFromCart, emtpyCart };