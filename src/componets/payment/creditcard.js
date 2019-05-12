import React from 'react'

function CreditCard(props) {
  return (
    <>
      <label>
        Creditcard number:
        <input type="number" value={props.creditcardnumber} onChange={e => props.updateData('creditcardnumber', e.target.value)} />
        <p className="checkout--error">{props.error.creditcardnumber}</p>
      </label>
      <label>
        Month:
        <input type="number" value={props.month} onChange={e => props.updateData('month', e.target.value)} />
        <p className="checkout--error">{props.error.month}</p>
      </label>
      <label>
        Year:
        <input type="number" value={props.year} onChange={e => props.updateData('year', e.target.value)} />
        <p className="checkout--error">{props.error.year}</p>
      </label>
      <label>
        CVC:
        <input type="number" value={props.cvc} onChange={e => props.updateData('cvc', e.target.value)} />
        <p className="checkout--error">{props.error.cvc}</p>
      </label>
      <button className="button" onClick={() => props.validate(['creditcardnumber', 'month', 'year', 'cvc'], 'recipe')}>Next</button>
    </>
  )
}

export default CreditCard;