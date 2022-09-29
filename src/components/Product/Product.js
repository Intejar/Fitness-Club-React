import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, info, age, time, img } = props.product;
    return (
        <div id='product-container'>
            <div className='product'>
                <img src={img} alt="" ></img>
                <div className="product-info">
                    <p>Name:{name}</p>
                    <p>{info}</p>
                    <p>For Age: {age}</p>
                    <p>Time required: {time}</p>
                </div>
                <button onClick={() => props.handleAddToCart(props.product)}>Add to list</button>
            </div>
        </div>

    );
};

export default Product;