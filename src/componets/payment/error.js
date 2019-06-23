import React from 'react'

function Error({ error }) {
  const errorKeys = Object.keys(error);
  if (errorKeys.length === 0) {
    return null;
  }

  return (
    <section class="error-container" role="alert" aria-relevant="all">
      <h3>Oops you missed some information or something is wrong</h3>
      <p>
        <ul className="error-container--list">
          {errorKeys.map(k => 
            <li key={`error-key-${k}`}>
              {error[k]}
            </li>
          )}
        </ul>
      </p>
    </section>
  )
}

export default Error;