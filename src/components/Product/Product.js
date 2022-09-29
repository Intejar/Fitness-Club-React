import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, info, age, time, img } = props.product;
    return (
        <div id='product-container'>
            <div className='product'>
                <img src={img} alt="" ></img>
                <div className="product-info">
                    <p><span>Name:</span> {name}</p>
                    <p>{info}</p>
                    <p><span>For Age:</span> {age}</p>
                    <p><span>Time required:</span> {time}</p>
                </div>
                <button onClick={() => props.handleAddToCart(props.product)}>Add to list</button>
            </div>
        </div>

    );
};

export default Product;