import { useState } from "react";
import axios from 'axios'


export function Product(props) {
    const product = props.product;
    const loadCart = props.loadCart
    const [quantity , setQuantity] = useState(1);
    const addToCart = async () => {
                    await axios.post('http://localhost:3000/api/cart-items', {  // post is a different type of request, .post() is used to create data in the backend , this will create the cart-items insted of getting the cart-items
                        productId: product.id,
                        quantity: quantity
                    }); // we need to tell the backend which product to add to the cart to do that we can give axios.post another value which is a object, wehn we use post we can also send info to the backend using an object(this is called the request body)
                    await loadCart();
                }

    const selectQuantity = (event) => {
                    const quantitySelectod = Number(event.target.value);
                    setQuantity(quantitySelectod)
                    console.log(quantitySelectod)
                }
    return (
        <div key={product.id} className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                    src={product.image} />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`} />

                <div className="product-rating-count link-primary">
                    {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                ${(product.priceCents / 100).toFixed(2)}  {/* this will convert into a string */}
            </div>

            <div className="product-quantity-container">
                <select value={quantity} onChange={selectQuantity()} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
            </div>

            <button className="add-to-cart-button button-primary"
                onClick={addToCart()}>

                {/* 
                            <button className="add-to-cart-button button-primary"
                            onClick={() => {
                                axios.post('http://localhost:3000/api/cart-items' , {  // post is a different type of request, .post() is used to create data in the backend , this will create the cart-items insted of getting the cart-items
                                    productId: product.id,
                                    quantity: 1
                                }); // we need to tell the backend which product to add to the cart to do that we can give axios.post another value which is a object, wehn we use post we can also send info to the backend using an object(this is called the request body)
                                
                            }}> */}

                Add to Cart
            </button>
        </div>
    )
}