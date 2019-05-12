import React from 'react'

function Address(props) {
  return (
    <>
      <label>
        Firstname
        <input type="text" value={props.firstname} onChange={e => props.updateData('firstname', e.target.value)} />
        <p className="checkout--error">{props.error.firstname}</p>
      </label>
      <label>
        Lastname
        <input type="text" value={props.lastname} onChange={e => props.updateData('lastname', e.target.value)} />
        <p className="checkout--error">{props.error.lastname}</p>
      </label>
      <label>
        Adress
        <input type="text" value={props.address} onChange={e => props.updateData('address', e.target.value)} />
        <p className="checkout--error">{props.error.address}</p>
      </label>
      <label>
        City
        <input type="text" value={props.city} onChange={e => props.updateData('city', e.target.value)} />
        <p className="checkout--error">{props.error.city}</p>
      </label>
      <label>
        Zipcode
        <input type="number" value={props.zipcode}  onChange={e => props.updateData('zipcode', e.target.value)} />
        <p className="checkout--error">{props.error.zipcode}</p>
      </label>
      <label>
        Country
        <input type="text" value={props.country} onChange={e => props.updateData('country', e.target.value)} />
        <p className="checkout--error">{props.error.country}</p>
      </label>
      <button className="button" onClick={() => props.validate(['firstname', 'lastname', 'address', 'city', 'zipcode', 'country'], 'creditcard')} >Next</button>
    </>
  );
}
export default Address;