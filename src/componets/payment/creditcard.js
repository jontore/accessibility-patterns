import React from 'react'
import ErrorComponent from './error';
import { emtpyCart, useCart, useReceipt } from '../cart/CartContext';

function CreditCard(props) {
  const [ list, setList, ] = useCart();
  const [ receiptList, setReceipeList ] = useReceipt();
  const onPay = () => {
    const isValid = props.validate(['creditcardnumber', 'month', 'year', 'cvc'], 'receipt');
    if (isValid) {
      setReceipeList(list);
      emtpyCart(setList);
    }
  }
  return (
    <>
      <h1>Fill in payment details (Step 3 of 3):</h1>
      <ErrorComponent error={props.error} /> 
      <label className="checkout--input">
        Creditcard number:
        <input type="number" aria-required="true" aria-describedby="error-creditcardnumber" value={props.creditcardnumber} onChange={e => props.updateData('creditcardnumber', e.target.value)} />
        <p className="checkout--error" id="error-creditcardnumber">{props.error.creditcardnumber}</p>
      </label>
      <label className="checkout--input">
        Month:
        <input type="number" aria-required="true" aria-describedby="error-month" value={props.month} onChange={e => props.updateData('month', e.target.value)} />
        <p className="checkout--error" id="error-month" >{props.error.month}</p>
      </label>
      <label className="checkout--input">
        Year:
        <input type="number" aria-required="true" aria-describedby="error-year" value={props.year} onChange={e => props.updateData('year', e.target.value)} />
        <p className="checkout--error" id="error-year">{props.error.year}</p>
      </label>
      <label className="checkout--input">
        CVC:
        <input type="number" aria-required="true" aria-describedby="error-cvc" value={props.cvc} onChange={e => props.updateData('cvc', e.target.value)} />
        <p className="checkout--error" id="error-cvc">{props.error.cvc}</p>
      </label>
      <button className="button" onClick={onPay}>Pay</button>
    </>
  )
}

export default CreditCard;