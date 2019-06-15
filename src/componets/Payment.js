import React from 'react'
import { Route } from 'react-router-dom';

import Contact from './payment/contact';
import Address from './payment/address';
import CreditCard from './payment/creditcard';
import Receipt from './payment/receipt';

import { ReceiptProvider } from './cart/CartContext';

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
      creditcardnumber: '',
      month: '',
      year: '',
      cvc: '',
      error: {},
    }

    this.updateData = this.updateData.bind(this);
    this.validate = this.validate.bind(this);
  }

  updateData(key, value) {
    const o = {};
    o[key] = value;
    this.setState(o);
  }

  validate(keys, route) {
    let error = {};
    keys.map(key => {
      error = {
        ...error,
        ...this.validateData(key, this.state[key])
      };
    });

    this.setState({
      error: error,
    });

    if (Object.keys(error).length === 0) {
      this.props.history.push(route);
    }

    return Object.keys(error).length === 0;
  }

  validateData(key, value) {
    switch(key) {
      case 'zipcode':
      case 'creditcardnumber':
      case 'month':
      case 'year':
      case 'cvc':
      const numberError = this.validateNumber(key, value);
        if (numberError) {
          return numberError;
        }
        break;
      case 'email': {
          const requiredError = this.validateRequire(key, value);
          if (requiredError) {
            return requiredError;
          }
          const emailError = this.validateEmail(key, value);
          if (emailError) {
            return emailError;
          }
        }
        break;
      default:
        const requiredError = this.validateRequire(key, value);
        if (requiredError) {
          return requiredError;
        }
        break;

    }

    return null;
  }

  validateNumber(key, value) {
    const error = {};
    try {
      const valueNum = parseInt(value, 10);
      if (valueNum === NaN || value.length === 0) {
        error[key] = 'Needs to be a valid number';
        return error;
      }
      return null;
    } catch(e) {
      error[key] = 'Needs to be a valid number';
      return error;
    }

    return null;
  }

  validateRequire(key, value) {
    const error = {};
    if(!value || value.length === 0) {
      error[key] = `A ${key} is required`;
      return error;
    }
  }

  validateEmail(key, value) {
    const error = {};
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(String(value).toLowerCase());
    if (!valid) {
      error[key] = 'The email address is invalid';
      return error;
    }
  }

  render() {
    return (
      <ReceiptProvider>  
        <Route path={`${this.props.match.path}/contact`} render={rProps => (<Contact
          {...rProps}
          {...this.state}
          updateData={this.updateData}
          validate={this.validate}
        />)} exact />
        <Route path={`${this.props.match.path}/address`} exact  render={rProps => (<Address
          {...rProps}
          {...this.state}
          updateData={this.updateData}
          validate={this.validate}
        />)} />
        <Route path={`${this.props.match.path}/creditcard`} exact  render={rProps => (<CreditCard
          {...rProps}
          {...this.state}
          updateData={this.updateData}
          validate={this.validate}
        />)} />
        <Route path={`${this.props.match.path}/receipt`} exact render={rProps => (<Receipt
          {...rProps}
          {...this.state}
          updateData={this.updateData}
          validate={this.validate}
        />)} />
      </ReceiptProvider>
    )
  }
}

export default Payment;