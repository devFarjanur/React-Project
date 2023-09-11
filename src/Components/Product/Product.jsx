/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    // eslint-disable-next-line react/prop-types
    const {img, name, price, seller, ratings} = props.product;

    // eslint-disable-next-line react/prop-types
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img}></img>
            <div className="product-info">
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart } />
                </button>
        </div>
    );
};

export default Product;