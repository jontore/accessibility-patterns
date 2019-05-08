import { Link } from 'react-router-dom';
import React from 'react'

function Address(props) {
  return (
    <>
      <form>
        <label>
          Firstname
          <input type="text" value={props.firstname} onChange={e => props.updateData('firstname', e.target.value)} />
        </label>
        <label>
          Lastname
          <input type="text" value={props.lastname} onChange={e => props.updateData('lastname', e.target.value)} />
        </label>
        <label>
          Adress
          <input type="text" value={props.address} onChange={e => props.updateData('address', e.target.value)} />
        </label>
        <label>
          City
          <input type="text" value={props.city} onChange={e => props.updateData('city', e.target.value)} />
        </label>
        <label>
          Zipcode
          <input type="number" value={props.zipcode}  onChange={e => props.updateData('zipcode', e.target.value)} />
        </label>
        <label>
          Country
          <input type="text" value={props.country} onChange={e => props.updateData('country', e.target.value)} />
        </label>
      </form>
      <Link to="creditcard">Next</Link>
    </>
  );
}
export default Address;