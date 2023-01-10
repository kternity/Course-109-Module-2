import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    let nextVal = quantity + 1;
    setQuantity(nextVal);
    props.onChange(nextVal);
  }

  function handleDecrease() {
    if (quantity === 1) return;
  
    let nextVal = quantity - 1;
    setQuantity(nextVal);
    props.onChange(nextVal);
  
  }



  return (
    <div className="qty-picker">
      <button className='btn btn-sm btn-primary' disabled={quantity === 1} onClick={handleDecrease}>-</button>
      <label>{quantity}</label>
      <button className='btn btn-sm btn-primary' onClick={handleIncrease}>+</button>
    </div>
  );
}

export default QuantityPicker;
