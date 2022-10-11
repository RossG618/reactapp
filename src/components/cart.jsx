import React from 'react';
import { useState, useEffect } from 'react';
import { QuantityInput } from './Counters/counterButtons';
import { products } from './Products';


// const [productItems, setProductItems] = useState([])
// const [totPrice, setTotPrice] = useState(0);
//   const [counter, setCounter] = useState(0);

  // const increment = () => {
  //     setCounter((count) => count + 1)
  // }
  // const decrement = () => {
  //         setCounter((count) => count - 1)
      
  // }
  // const reset = () => {
  //     setCounter(0)
  // }
  
export default function Cart(){
    
    let cart = products.filter(
      (ele, ind) => ind === products.findIndex((elem) => elem.id === ele.id)
    );
    
    const totalPrice = cart.reduce(
     (totalPrice, item) => totalPrice + item.price,
     0
    );

    const quantityPrice = totalPrice;

    return(
        <div>
           
            {/* <div className="col-md-5 col-lg-4 ">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3 dope">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${counter}</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div> */}
      <h1>Cart items</h1>
      <h2>Overall Price £{quantityPrice} </h2>
      {products.map(data => (
        <div key={data.id} className='list-group-item container mb-3'>
          <div className="d-flex shadow-sm border rounded-2">
            <img className='img-thumbnail w-25' src={data.image} alt="" />
            <div className="d-flex flex-column m-2">
              <h3 className='mb-3'>{data.name}</h3>
              <h5>£{data.price}</h5>
              <p className='my-auto'>{data.desc}</p>
            <div className='d-flex align-items-center'>
              <QuantityInput />
                {/* <span className="h3">{counter}</span>
                      <button className='btn btn-primary m-2' onClick={increment}>+</button>
                      <button className='btn btn-primary m-2' disabled={(counter <= 0)} onClick={decrement}>-</button>
                      <button className='btn btn-danger m-2' onClick={reset}>Reset</button> */}
                </div>
            </div>
          </div>
        </div>
      ))}
     
        </div>
    )
}