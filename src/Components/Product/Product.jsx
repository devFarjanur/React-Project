// eslint-disable-next-line no-unused-vars
import React from 'react';

const Product = () => {
    return (
        <div>
            <img src={img}></img>
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
        </div>
    );
};

export default Product;