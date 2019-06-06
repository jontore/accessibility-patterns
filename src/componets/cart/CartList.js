import React from 'react'

function CartList({ adjustable = true, list, add, remove }) {
  const totalPrice = list.reduce((sum, item) => {
    return sum + (item.price * item.count);
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
                {adjustable ? <button className="checkout--cell--button" aria-label="Add one item" title="Add one item" onClick={() => add(i)}>+</button> : null}
                {adjustable ? <button className="checkout--cell--button" aria-label="Remove one item" title="Remove one item" onClick={() => remove(i)}>-</button> : null}
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
      <p className="checkout--total">
        Total price: {totalPrice}
      </p>
    </section>
  );
}

export default CartList;