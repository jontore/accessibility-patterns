import React from 'react'
import ErrorComponent from './error';

function Contact({ email, updateData, error, validate }) {
  return (
    <>
      <h1>Fill in contact information (Step 1 of 3):</h1>
      <ErrorComponent error={error} />
      <label className="checkout--input">
        Email
        <input type="email" value={email} aria-describedby="error-email" aria-required="true" onChange={(e) => updateData('email', e.target.value)}/>
        <p className="checkout--error" id="error-email">{error.email}</p>
      </label>
      <button className="button" onClick={() => validate(['email'], 'address')}>Next</button>
    </>
  );
}

export default Contact;