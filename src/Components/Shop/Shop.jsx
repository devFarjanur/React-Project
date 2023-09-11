// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    const [ products, setProducts ] = useState([]);
    const [ cart, setCart] = useState([]);

    useEffect(() => {
        fetch('/public/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [ ...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map( product => <Product 
                        key={product.id}
                        product={product} 
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>order summary</h1>
                <h5>Select item: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;