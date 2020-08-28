import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Added Course: {cart.length}</h4>
            <p>Total Price: {totalPrice}</p>
            <Button  className="btn btn-success" onClick={() => alert('Thank you for joining with us')}>Checkout</Button>
        </div>
    );
};

export default Cart;