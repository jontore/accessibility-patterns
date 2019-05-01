import { Link } from 'react-router-dom';
import React from 'react'

class Address extends React.Component {
  constructor() {
    super();
    this.state = {
      forname: undefined,
      lastname: undefined,
      address: undefined,
      city: undefined,
      postalcode: undefined,
      country: undefined,
    }
  }

  render() {
    return (
      <>
        <form>
          <label>
            Forname
            <input type="text" />
          </label>
          <label>
            Lastname
            <input type="text" />
          </label>
          <label>
            Adress
            <input type="text" />
          </label>
          <label>
            City
            <input type="text" />
          </label>
          <label>
            Postalcode
            <input type="number" />
          </label>
          <label>
            Country
            <input type="text" />
          </label>
        </form>
        <Link to="creditcard">Next</Link>
      </>
    );
  }
}

export default Address;