import React from 'react';
import './ItemCart.css';
import { handleTotalPrice } from '../../../utills/CommonUtils';
import { handleTypeDiscountPrice } from '../../../utills/CommonUtils';
import { handleNormalDiscount } from '../../../utills/CommonUtils';
import { getAllData } from '../../../utills/CommonUtils';

function ItemCart(props) {
  let totalItemPrice = handleTotalPrice(props.data);
  let normalDiscountPrice = handleNormalDiscount(props.data);
  let typeDiscountPrice = handleTypeDiscountPrice(props.data);
  let finalItemPrice =
    totalItemPrice - (normalDiscountPrice + typeDiscountPrice);

  if (props.data.length !== 0) {
    return (
      <div className="cart-container">
        <table>
          <thead className="cart-thead">
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody className="cart-tbody">
            <tr>
              <td className="cart-items">Items ({props.data.length})</td>
              <td>:</td>
              <td>${totalItemPrice}</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>:</td>
              <td>-${normalDiscountPrice}</td>
            </tr>
            <tr>
              <td>Type discount</td>
              <td>:</td>
              <td>-${typeDiscountPrice}</td>
            </tr>
            <tr>
              <td>Order total</td>
              <td>:</td>
              <td>${finalItemPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <button onClick={() => getAllData()}>No Item In Cart</button>
      </div>
    );
  }
}

export default ItemCart;
