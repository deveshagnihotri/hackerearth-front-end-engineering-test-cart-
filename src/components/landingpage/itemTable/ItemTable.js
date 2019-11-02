import React, { useState, useEffect } from 'react';
import data from '../../../data/db.json';
import './ItemTable.css';
import { handleDeleteItem } from '../../../utills/CommonUtils';
import { handleIncreseQty } from '../../../utills/CommonUtils';
import { handleDecrementQty } from '../../../utills/CommonUtils';

function ItemTable(props) {
  const [apiData, setApiData] = useState([]);
  let itemLength = apiData.length;

  useEffect(() => {
    checkPreviousState();
  }, []);

  const checkPreviousState = () => {
    console.log('hello');
    if (!localStorage.getItem('item')) {
      setApiData(data);
      localStorage.setItem('item', JSON.stringify(data));
    } else {
      setApiData(JSON.parse(localStorage.getItem('item')));
    }
  };

  useEffect(() => {
    passItemToCart();
  });

  const passItemToCart = () => {
    props.itemCart(apiData);
  };
  return (
    <div className="table-container">
      <table>
        <thead className="table-header">
          <tr>
            <td className="th-items">Items ({itemLength})</td>
            <td className="th-qty">Qty</td>
            <td className="th-price">Price</td>
          </tr>
        </thead>
        <tbody className="table-body">
          {apiData.map((item, id) => (
            <tr className="table-body-rows" key={id}>
              <td>
                <div className="tbody-items">
                  <img src={item.img_url} width={40} height={40} />
                  <span>{item.name}</span>
                  <span
                    onClick={() => handleDeleteItem(item, apiData, setApiData)}
                  >
                    &#10005;
                  </span>
                </div>
              </td>
              <td>
                <div className="tbody-qty">
                  <span
                    onClick={() =>
                      handleDecrementQty(item, apiData, setApiData)
                    }
                  >
                    -
                  </span>
                  <span>{item.qty}</span>
                  <span
                    onClick={() => handleIncreseQty(item, apiData, setApiData)}
                  >
                    +
                  </span>
                </div>
              </td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemTable;
