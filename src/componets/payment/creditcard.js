import React from 'react'
import ErrorComponent from './error';

function CreditCard(props) {
  return (
    <>
      <h1>Fill in payment detauls:</h1>
      <ErrorComponent error={props.error} /> 
      <label className="checkout--input">
        Creditcard number:
        <input type="number" aria-required="true" value={props.creditcardnumber} onChange={e => props.updateData('creditcardnumber', e.target.value)} />
        <p className="checkout--error">{props.error.creditcardnumber}</p>
      </label>
      <label className="checkout--input">
        Month:
        <input type="number" aria-required="true" value={props.month} onChange={e => props.updateData('month', e.target.value)} />
        <p className="checkout--error">{props.error.month}</p>
      </label>
      <label className="checkout--input">
        Year:
        <input type="number" aria-required="true" value={props.year} onChange={e => props.updateData('year', e.target.value)} />
        <p className="checkout--error">{props.error.year}</p>
      </label>
      <label className="checkout--input">
        CVC:
        <input type="number" aria-required="true" value={props.cvc} onChange={e => props.updateData('cvc', e.target.value)} />
        <p className="checkout--error">{props.error.cvc}</p>
      </label>
      <button className="button" onClick={() => props.validate(['creditcardnumber', 'month', 'year', 'cvc'], 'receipt')}>Pay</button>
    </>
  )
}

export default CreditCard;