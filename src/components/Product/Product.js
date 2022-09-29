import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, info, age, time, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" ></img>
            <div className="product-info">
                <p>Name:{name}</p>
                <p>{info}</p>
                <p>For Age: {age}</p>
                <p>Time required: {time}</p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)}>add</button>
        </div>

    );
};

export default Product;