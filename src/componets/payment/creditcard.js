import React from 'react'
import { Link } from 'react-router-dom';

function CreditCard(props) {
  return (
    <>
      <form>
        <label>
          Creditcard number:
          <input type="number" value={props.creditcartnumber} onChange={e => props.updateData('creditcartnumber', e.target.value)} />
        </label>
        <label>
          Month:
          <input type="number" value={props.month} onChange={e => props.updateData('month', e.target.value)} />
        </label>
        <label>
          Year:
          <input type="number" value={props.year} onChange={e => props.updateData('year', e.target.value)} />
        </label>
        <label>
          CVC:
          <input type="number" value={props.cvc} onChange={e => props.updateData('cvc', e.target.value)} />
        </label>
      </form>
      <Link to="recipe">Next</Link>
    </>
  )
}

export default CreditCard;