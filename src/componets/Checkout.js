import React from 'react';

import CartCheckout from './cart/CartCheckout';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <CartCheckout />
      </>
    )
  }
}

export default Checkout;