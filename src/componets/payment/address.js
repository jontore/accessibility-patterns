import React from 'react'
import ErrorComponent from './error';

function Address(props) {
  return (
    <>
      <h1>Fill in delivery information (Step 2 of 3):</h1>
      <ErrorComponent error={props.error} />
      <label className="checkout--input">
        Firstname
        <input type="text" aria-required="true" aria-describedby="error-firstname" value={props.firstname} onChange={e => props.updateData('firstname', e.target.value)} />
        <p className="checkout--error" id="error-firstname" >{props.error.firstname}</p>
      </label>
      <label className="checkout--input">
        Lastname
        <input type="text" aria-required="true" aria-describedby="error-lastname" value={props.lastname} onChange={e => props.updateData('lastname', e.target.value)} />
        <p className="checkout--error" id="error-lastname" >{props.error.lastname}</p>
      </label>
      <label className="checkout--input">
        Adress
        <input type="text" aria-required="true" aria-describedby="error-address" value={props.address} onChange={e => props.updateData('address', e.target.value)} />
        <p className="checkout--error" id="error-address" >{props.error.address}</p>
      </label>
      <label className="checkout--input">
        City
        <input type="text" aria-required="true" aria-describedby="error-city" value={props.city} onChange={e => props.updateData('city', e.target.value)} />
        <p className="checkout--error" id="error-city" >{props.error.city}</p>
      </label>
      <label className="checkout--input">
        Zipcode
        <input type="number" aria-required="true" aria-describedby="error-zipcode" value={props.zipcode}  onChange={e => props.updateData('zipcode', e.target.value)} />
        <p className="checkout--error" id="error-zipcode" >{props.error.zipcode}</p>
      </label>
      <label className="checkout--input">
        Country
        <input type="text" aria-required="true" aria-describedby="error-country" value={props.country} onChange={e => props.updateData('country', e.target.value)} />
        <p className="checkout--error" id="error-country" >{props.error.country}</p>
      </label>
      <button className="button" onClick={() => props.validate(['firstname', 'lastname', 'address', 'city', 'zipcode', 'country'], 'creditcard')} >Next</button>
    </>
  );
}
export default Address;