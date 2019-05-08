import React from 'react'
import { Route } from 'react-router-dom';

import Contact from './payment/contact';
import Address from './payment/address';
import CreditCard from './payment/creditcard';
import Recipe from './payment/recipe';

class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      address: '',
      city: '',
      zipcode: '',
      country: '',
      creditcartnumber: '',
      month: '',
      year: '',
      cvc: '',
      error: {},
    }

    this.updateData = this.updateData.bind(this);
  }

  updateData(key, value) {
    const o = {};
    o[key] = value;
    this.setState(o);
  }

  render() {
    return (
      <>
        {JSON.stringify(this.state)}
        <Route path={`${this.props.match.path}/contact`} render={rProps => (<Contact {...rProps} {...this.state} updateData={this.updateData} />)} exact />
        <Route path={`${this.props.match.path}/address`} exact  render={rProps => (<Address {...rProps} {...this.state} updateData={this.updateData} />)} />
        <Route path={`${this.props.match.path}/creditcard`} exact  render={rProps => (<CreditCard {...rProps} {...this.state} updateData={this.updateData} />)} />
        <Route path={`${this.props.match.path}/recipe`} exact render={rProps => (<Recipe {...rProps} {...this.state} updateData={this.updateData} />)} />
      </>
    )
  }
}

export default Payment;