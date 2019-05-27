import React from 'react'
import ErrorComponent from './error';

function Address(props) {
  return (
    <>
      <h1>Fill in delivery information:</h1>
      <ErrorComponent error={props.error} />
      <label className="checkout--input">
        Firstname
        <input type="text" aria-required="true" value={props.firstname} onChange={e => props.updateData('firstname', e.target.value)} />
        <p className="checkout--error">{props.error.firstname}</p>
      </label>
      <label className="checkout--input">
        Lastname
        <input type="text" aria-required="true" value={props.lastname} onChange={e => props.updateData('lastname', e.target.value)} />
        <p className="checkout--error">{props.error.lastname}</p>
      </label>
      <label className="checkout--input">
        Adress
        <input type="text" aria-required="true" value={props.address} onChange={e => props.updateData('address', e.target.value)} />
        <p className="checkout--error">{props.error.address}</p>
      </label>
      <label className="checkout--input">
        City
        <input type="text" aria-required="true" value={props.city} onChange={e => props.updateData('city', e.target.value)} />
        <p className="checkout--error">{props.error.city}</p>
      </label>
      <label className="checkout--input">
        Zipcode
        <input type="number" aria-required="true" value={props.zipcode}  onChange={e => props.updateData('zipcode', e.target.value)} />
        <p className="checkout--error">{props.error.zipcode}</p>
      </label>
      <label className="checkout--input">
        Country
        <input type="text" aria-required="true" value={props.country} onChange={e => props.updateData('country', e.target.value)} />
        <p className="checkout--error">{props.error.country}</p>
      </label>
      <button className="button" onClick={() => props.validate(['firstname', 'lastname', 'address', 'city', 'zipcode', 'country'], 'creditcard')} >Next</button>
    </>
  );
}
export default Address;