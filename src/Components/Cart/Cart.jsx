/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total*7/100;

    const grandTotal = total + totalShipping + tax;

    return (
        <div className='order'>
            <h5>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: {tax.toFixed(5)}</p>
            <h6>Grand Total: {grandTotal.toFixed(4)}</h6>
            
            <div className="cart-btn">
                <button className='clear'>Clear Cart</button>
     
            </div>
            <div className="cart-btn2">
                 <button className='review'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;