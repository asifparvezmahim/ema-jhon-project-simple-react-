import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * (10 / 100)).toFixed(2))
    const grandTotal = parseFloat((total + shipping + tax).toFixed(2));







    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h1>Selected Cart:{quantity}</h1>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${shipping} </p>
            <p>Tax:${tax} [10% of Total Price] </p>
            <p>Grand Total:${grandTotal} </p>
        </div>
    );
};

export default Cart;