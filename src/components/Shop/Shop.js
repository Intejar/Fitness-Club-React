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
    const handleAddToCart =(product) =>{
        console.log(product)
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <p>{cart.length}</p>
                <Cart></Cart>
                <Break></Break>
                <Details ></Details>
            </div>
        </div>
    );
};

export default Shop;