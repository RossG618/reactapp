import React from 'react';
import { useQuantity } from './counter';

export const QuantityInput = () => {
    const quantity = useQuantity(); // Use quantity here, do not need to pass from props
  
    const decrement = () => {
       quantity.setValue(quantity.value - 1);
    };
  
    const increment = () => {
      quantity.setValue(quantity.value + 1);
    };
  
    return (
      <div className='d-flex align-items-center'>
          <button
          className='btn btn-primary m-1'
            onClick={decrement}
            disabled={quantity.value === 1}
          >
            -
          </button>
          <button
          className='btn btn-primary m-1'
           onClick={increment}> + </button>
          <input
          className="rounded-2 h-25 "
          {...quantity} />
      </div>
    );
  };
  