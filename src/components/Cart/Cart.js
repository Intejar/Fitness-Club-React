import React from 'react';
import './Cart.css'

const Cart = () => {
    
    return (
        <div className='container'>
            <div className='profile'>
                <img src="https://apiwp.thelocal.com/wp-content/uploads/2018/12/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8.jpg" alt="" />
                <div>
                    <p>Mohammad Umar</p>
                    <p>Bangladesh</p>
                </div>
            </div>
            <div className='measurements'>
                <div>
                    <p>70 kg</p>
                    <p>weight</p>
                </div>
                <div>
                    <p>5.7 ft</p>
                    <p>height</p>
                </div>
                <div>
                    <p>30 yrs</p>
                    <p>age</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;