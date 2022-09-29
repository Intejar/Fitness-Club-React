import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className='shop-container'>
            <div className='main'>
                <div className='shop-name'>
                    <img src="https://i.pinimg.com/736x/0f/8a/78/0f8a7847f053d3b12aa7a5f4e63a285f.jpg" alt="" />
                    <h1>Fitness Freak</h1>
                </div>
                <div>
                    <h2>Choose Today's Excercise</h2>
                </div>
                <div className="product-container">
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart></Cart>
                <Break></Break>
                <Details cart={cart} ></Details>
            </div>
        </div>
    );
};

export default Shop;