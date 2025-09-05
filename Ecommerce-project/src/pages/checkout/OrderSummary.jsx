import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";
import axios from "axios";


export function OrderSummary({ cart, deliveryOptions , loadCart}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {  // do chatgpt for find fn
                    return deliveryOption.id === cartItem.deliveryOptionId;
                })

                const deleteCartItem = async () => {
                    await axios.delete(`http://localhost:3000/api/cart-items/${cartItem.productId}`);
                    await loadCart();

                }

                return (
                    <div className="cart-item-container" >
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd , MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {cartItem.product.name}
                                </div>
                                <div className="product-price">
                                    ${(cartItem.product.priceCents / 100).toFixed(2)}
                                </div>
                                <div className="product-quantity">
                                    <span>
                                        Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                    </span>
                                    <span className="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary"  onClick={deleteCartItem}>
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
                        </div>
                    </div>
                )

            })}

        </div>
    )
}