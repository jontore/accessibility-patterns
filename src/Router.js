import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { CartProvider } from './componets/cart/CartContext';

import Overview from './componets/Overview';
import Item from './componets/Item';
import NotFound from './componets/Notfound';
import Cart from './componets/cart/Cart';
import Checkout from './componets/Checkout';
import Payment from './componets/Payment';

function RouteComponent() {
  return (
    <CartProvider >
      <Router>
          <Cart />
          <Route path="/" exact component={Overview} />
          <Route path="/item/:id" exact component={Item} />
          <Route path="/404" exact component={NotFound} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/payment" component={Payment} />
      </Router>
    </CartProvider>
  );
}

export default RouteComponent;