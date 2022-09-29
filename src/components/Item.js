import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

const Item = ({addProductToCart}) => {

    let { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch(e => console.log(e));
        
    }, [id]);

    return(
        <div className="item">
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p><strong>Price</strong>: {product.price}€</p>
                <button onClick={() => addProductToCart(product)} id={product.id}>
                    Add to cart
                </button>
            </div>
            <div className="itemImage">
                <img src={product.image} alt={product.title}/>
            </div>
        </div>
    )
}

export default Item;