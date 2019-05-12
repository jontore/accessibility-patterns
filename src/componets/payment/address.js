import React from 'react'

function Address(props) {
  return (
    <>
      <label>
        Firstname
        <input type="text" value={props.firstname} onChange={e => props.updateData('firstname', e.target.value)} />
        {props.error.firstname}
      </label>
      <label>
        Lastname
        <input type="text" value={props.lastname} onChange={e => props.updateData('lastname', e.target.value)} />
        {props.error.lastname}
      </label>
      <label>
        Adress
        <input type="text" value={props.address} onChange={e => props.updateData('address', e.target.value)} />
        {props.error.address}
      </label>
      <label>
        City
        <input type="text" value={props.city} onChange={e => props.updateData('city', e.target.value)} />
        {props.error.city}
      </label>
      <label>
        Zipcode
        <input type="number" value={props.zipcode}  onChange={e => props.updateData('zipcode', e.target.value)} />
        {props.error.zipcode}
      </label>
      <label>
        Country
        <input type="text" value={props.country} onChange={e => props.updateData('country', e.target.value)} />
        {props.error.country}
      </label>
      <button onClick={() => props.validate(['firstname', 'lastname', 'address', 'city', 'zipcode', 'country'], 'creditcard')} >Next</button>
    </>
  );
}
export default Address;