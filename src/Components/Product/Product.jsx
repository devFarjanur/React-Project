// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css'

const Product = (props) => {

    const {img, name, price, seller, ratings} = props.product;

    return (
        <div className='product'>
            <img src={img}></img>
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
        </div>
    );
};

export default Product;