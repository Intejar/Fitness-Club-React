import React from 'react';
import Cart from '../Cart/Cart';
import './Details.css'
const Details = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.time;
    }
    return (
        <div>
            <h3>Excercise Details</h3>
            <div>
                <div className='display-details'>
                    <p>Excercise time</p>
                    <p><span>{total}</span>sec</p>
                </div>
                <div className='display-details'>
                    <p>Break time</p>
                    <p><span id='time-display'>{localStorage.getItem('break')}</span>sec</p>
                </div>
            </div>
        </div>
    );
};

export default Details;