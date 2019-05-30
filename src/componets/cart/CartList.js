import React from 'react'
import { useCart, addToCart, removeFromCart } from './CartContext'

function CartList({ adjustable = true }) {
  const [ list, addToList ] = useCart();
  const totalPrice = list.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  return (
    <section className="checkout"> 
      <table className="checkout--table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {list.map(i => {
            return (
            <tr className="checkout-item" key={`checkout-cart-${i.id}`}>
              <td className="checkout--cell">{i.name}</td>
              <td className="checkout--cell">{i.price}</td>
              <td className="checkout--cell">
                <span className="checkout--cell">{i.count}</span>
                {adjustable ? <button className="checkout--cell--button" onClick={() => addToCart(i, list, addToList)}>+</button> : null}
                {adjustable ? <button className="checkout--cell--button" onClick={() => removeFromCart(i, list, addToList)}>-</button> : null}
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
      <p className="checkout--total">
        Subtotal: {totalPrice}
      </p>
    </section>
  );
}

export default CartList;