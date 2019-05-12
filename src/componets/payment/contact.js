import React from 'react'

function Contact({ email, updateData, error, validate }) {
  return (
    <>
      <label>
        Email
        <input type="text" value={email} onChange={(e) => updateData('email', e.target.value)}/>
        {error.email}
      </label>
      <button onClick={() => validate(['email'], 'address')}>Next</button>
    </>
  );
}

export default Contact;