import React from 'react';

import Cart from './componets/cart/Cart';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li className="nav--item">
          <Link to='/'>Store</Link>
        </li>
        <li className="nav--item">
          <Link to='/filter/shoe'>Shoes</Link>
        </li>
        <li className="nav--item">
          <Link to='/filter/sock'>Socks</Link>
        </li>
        <li className="nav--right">
          <Cart />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
