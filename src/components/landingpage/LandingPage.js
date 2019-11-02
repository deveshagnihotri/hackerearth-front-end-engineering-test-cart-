import React, { useState } from 'react';
import './LandingPage.css';
import ItemTable from './itemTable';
import ItemCart from './Itemcart';

function LandingPage() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <div className="lp-container-parent">
      <div className="lp-table-main">
        <h2>
          <span>&#60;</span>
          Order Summary
        </h2>
        <div className="lp-table-container">
          <div className="lp-table-block1">
            <ItemTable itemCart={item => setCartItem(item)} />
          </div>
          <div className="lp-table-block2">
            <ItemCart data={cartItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
