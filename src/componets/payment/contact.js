import React from 'react'
import ErrorComponent from './error';

function Contact({ email, updateData, error, validate }) {
  return (
    <>
      <h1>Fill in contact information:</h1>
      <ErrorComponent error={error} />
      <label className="checkout--input">
        Email
        <input type="text" value={email} aria-required="true" type="text" onChange={(e) => updateData('email', e.target.value)}/>
        <p className="checkout--error" role="error">{error.email}</p>
      </label>
      <button className="button" onClick={() => validate(['email'], 'address')}>Next</button>
    </>
  );
}

export default Contact;