import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, category, price, seller, shipping } = props.product

    return (

        <div className='product-info'>
            <img src={img} alt="" />
            <div className="discription">
                <h3>Category:{category}</h3>
                <h4>Price:${price}</h4>
                <h4>Shipping:${shipping}</h4>
                <p>Seller:{seller}</p>
            </div>
            <button onClick={() => props.eventHandler(props.product)} className='btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    )
}

export default Product;