// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

    const [ products, setProducts ] =useState([]);

    useEffect(() => {
        fetch('/public/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1>products: {products.length}</h1>
            </div>
            <div className="cart-container">
                <h1>order summary</h1>
            </div>
        </div>
    );
};

export default Shop;