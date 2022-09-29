import React from 'react';
import './Cart.css'

const Cart = () => {
    
    return (
        <div className='container'>
            <div className='profile'>
                <img src="https://apiwp.thelocal.com/wp-content/uploads/2018/12/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8.jpg" alt="" />
                <div className='name'>
                    <p>Mohammad Umar</p>
                </div>
            </div>
            <div className='measurements'>
                <div>
                    <p><span className='body'>70</span> <small>kg</small></p>
                    <p>WEIGHT</p>
                </div>
                <div>
                    <p><span className='body'>5.7</span> <small>ft</small></p>
                    <p>HEIGHT</p>
                </div>
                <div>
                    <p><span className='body'>30</span> <small>yrs</small></p>
                    <p>AGE</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;