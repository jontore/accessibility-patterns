import React from 'react'

class CreditCard extends React.Component {
  constructor() {
    super();
    this.state = {
      creditcartnumber: undefined,
      month: undefined,
      year: undefined,
      cvc: undefined,
    }
  }

  render() {
    return (
      <form>
        <label>
          Creditcard number:
          <input type="number" />
        </label>
        <label>
          Month:
          <input type="number" />
        </label>
        <label>
          Year:
          <input type="number" />
        </label>
        <label>
          CVC:
          <input type="number" />
        </label>
      </form>
    )
  }
}

export default CreditCard;