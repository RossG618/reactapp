import React from 'react';
import { QuantityInput } from './counterButtons';
import { useQuantity } from './counter';
import { products } from '../Products';
export const Order = () => {
    const quantity = useQuantity();

    return (
      
          <QuantityInput quantity={quantity} />
       
    )
  }