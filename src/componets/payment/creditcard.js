import React from 'react'

function CreditCard(props) {
  return (
    <>
      <label>
        Creditcard number:
        <input type="number" value={props.creditcardnumber} onChange={e => props.updateData('creditcardnumber', e.target.value)} />
        {props.error.creditcardnumber}
      </label>
      <label>
        Month:
        <input type="number" value={props.month} onChange={e => props.updateData('month', e.target.value)} />
        {props.error.month}
      </label>
      <label>
        Year:
        <input type="number" value={props.year} onChange={e => props.updateData('year', e.target.value)} />
        {props.error.year}
      </label>
      <label>
        CVC:
        <input type="number" value={props.cvc} onChange={e => props.updateData('cvc', e.target.value)} />
        {props.error.cvc}
      </label>
      <button onClick={() => props.validate(['creditcardnumber', 'month', 'year', 'cvc'], 'recipe')}>Next</button>
    </>
  )
}

export default CreditCard;