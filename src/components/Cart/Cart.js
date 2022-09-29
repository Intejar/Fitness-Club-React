import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.time;
    }

    return (
        <div>
            <p>Hello</p>
            <p>Time: {total}</p>
        </div>
    );
};

export default Cart;