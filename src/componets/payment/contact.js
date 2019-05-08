import { Link } from 'react-router-dom';

import React from 'react'

function Contact({ email, updateData }) {
  return (
    <form>
      <label>
        Email
        <input type="text" value={email} onChange={(e) => updateData('email', e.target.value)}/>
      </label>
      <Link to="address">Next</Link>
    </form>
  );
}

export default Contact;