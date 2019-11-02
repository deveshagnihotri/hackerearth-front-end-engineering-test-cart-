import { toast } from 'react-toastify';

export const handleDeleteItem = (item, apiData, setApiData) => {
  let updatedItems = apiData.filter(val => val.id !== item.id);
  return (
    setApiData(updatedItems),
    localStorage.setItem('item', JSON.stringify(updatedItems)),
    toast.info(item.name + ' successfully removed from cart.')
  );
};

//total price in cart
export const handleTotalPrice = data => {
  let totalPrice = 0;
  data.forEach(item => {
    totalPrice = totalPrice + item.qty * item.price;
  });
  return totalPrice;
};

//handle items quantity increment
export const handleIncreseQty = (item, apiData, setApiData) => {
  let afterIncreseQtyItemList = apiData.map(val => {
    if (val.id === item.id) {
      val['qty'] = val.qty + 1;
      return val;
    } else {
      return val;
    }
  });
  localStorage.setItem('item', JSON.stringify(afterIncreseQtyItemList));
  return setApiData(afterIncreseQtyItemList);
};

// handle item quantity decrement
export const handleDecrementQty = (item, apiData, setApiData) => {
  let afterIncreseQtyItemList = apiData.map(val => {
    if (val.id === item.id) {
      if (val.qty > 1) {
        val['qty'] = val.qty - 1;
      }
      return val;
    } else {
      return val;
    }
  });
  localStorage.setItem('item', JSON.stringify(afterIncreseQtyItemList));
  return setApiData(afterIncreseQtyItemList);
};

export const handleNormalDiscount = data => {
  let normalDiscount = 0;
  let discount = data.filter(
    val => (normalDiscount = normalDiscount + val.qty * val.discount)
  );
  return normalDiscount;
};

//handle type discount price
export const handleTypeDiscountPrice = data => {
  let typeDiscountPrice = 0;
  let checkItemType = data.filter(val => {
    if (val.type === 'fiction') {
      typeDiscountPrice = typeDiscountPrice + val.qty * val.price;
    }
  });
  return typeDiscountPrice * (15 / 100);
};

//Get All data after cart empty
export const getAllData = () => {
  localStorage.clear('item');
  window.location.reload();
};
