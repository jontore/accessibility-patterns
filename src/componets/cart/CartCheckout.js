import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'

function CartCheckout() {
  const [ list ] = useCart()
  const totalPrice = list.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <>
      <h2>What is in your cart</h2>
      {list.length === 0 ? <p>Your cart is empty</p> :
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
                  <td className="checkout--cell">{i.count}</td>
                </tr>
                );
              })}
            </tbody>
          </table>
          <p className="checkout--total">
            Subtotal: {totalPrice}
          </p>

          <Link className="button button__full" to="/payment/contact">go pay</Link>
        </section>
      }
    </>
  );
}

export default CartCheckout;