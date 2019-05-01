import { Link } from 'react-router-dom';

import React from 'react'

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      email: undefined,
    }
  }

  render() {
    return (
      <form>
        <label>
          Email
          <input type="text"  value={this.state.email}/>
        </label>
        <Link to="address">Next</Link>
      </form>
    );
  }
}

export default Contact;