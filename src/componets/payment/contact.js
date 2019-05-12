import React from 'react'

function Contact({ email, updateData, error, validate }) {
  return (
    <>
      <h1>Fill in contact information:</h1>
      <label>
        Email
        <input type="text" value={email} onChange={(e) => updateData('email', e.target.value)}/>
        <p className="checkout--error">{error.email}</p>
      </label>
      <button className="button" onClick={() => validate(['email'], 'address')}>Next</button>
    </>
  );
}

export default Contact;