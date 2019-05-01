import React from 'react'
import { Route } from 'react-router-dom';

import Contact from './payment/contact';
import Address from './payment/address';
import CreditCard from './payment/creditcard';

class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      email: undefined,
      forname: undefined,
      lastname: undefined,
      address: undefined,
      city: undefined,
      postalcode: undefined,
      country: undefined,
      creditcartnumber: undefined,
      month: undefined,
      year: undefined,
      cvc: undefined,
    }
  }

  render() {
    return (
      <>
        <Route path={`${this.props.match.path}/contact`} component={Contact} exact />
        <Route path={`${this.props.match.path}/address`} exact component={Address} />
        <Route path={`${this.props.match.path}/creditcart`} exact component={CreditCard} />
      </>
    )
  }
}

export default Payment;