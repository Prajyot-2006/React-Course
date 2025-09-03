import { Header } from '../../components/Header';
import './OrdersPage.css';
import axios from 'axios';
import dayjs from 'dayjs';
import { useState, useEffect, Fragment } from 'react';

export function Orders(props) {
    const cart = props.cart

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/orders?expand=products').then((response) => {
            setOrders(response.data)

        })
    }, []);


    return (
        <>
            <title>Orders</title>
            <Header cart={cart} />


            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.map((orderDetail) => {
                        return (
                            <div className="order-container">

                                <div className="order-header">
                                    <div className="order-header-left-section">
                                        <div className="order-date">
                                            <div className="order-header-label">Order Placed:</div>
                                            <div>{dayjs(orderDetail.orderTimeMs).format('MMMM D')}</div>
                                        </div>
                                        <div className="order-total">
                                            <div className="order-header-label">Total:</div>
                                            <div>${(orderDetail.totalCostCents / 100).toFixed(2)}</div>
                                        </div>
                                    </div>

                                    <div className="order-header-right-section">
                                        <div className="order-header-label">Order ID:</div>
                                        <div>{orderDetail.id}</div>
                                    </div>
                                </div>

                                <div className="order-details-grid">
                                    {orderDetail.products.map((orderProduct) => {
                                        return (
                                            <Fragment key={orderProduct.product.id} >
                                                <div className="product-image-container">
                                                    <img src={orderProduct.product.image} />
                                                </div>

                                                <div className="product-details">
                                                    <div className="product-name">
                                                        {orderProduct.product.name}
                                                    </div>
                                                    <div className="product-delivery-date">
                                                        Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                                                    </div>
                                                    <div className="product-quantity">
                                                        Quantity: {orderProduct.product.quantity}
                                                    </div>
                                                    <button className="buy-again-button button-primary">
                                                        <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                                        <span className="buy-again-message">Add to Cart</span>
                                                    </button>
                                                </div>

                                                <div className="product-actions">
                                                    <a href="/tracking">
                                                        <button className="track-package-button button-secondary">
                                                            Track package
                                                        </button>
                                                    </a>
                                                </div>
                                            </Fragment>
                                        );
                                    })}

                                    <div className="product-image-container">
                                        <img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
                                    </div>

                                    <div className="product-details">
                                        <div className="product-name">
                                            Adults Plain Cotton T-Shirt - 2 Pack
                                        </div>
                                        <div className="product-delivery-date">
                                            Arriving on: August 19
                                        </div>
                                        <div className="product-quantity">
                                            Quantity: 2
                                        </div>
                                        <button className="buy-again-button button-primary">
                                            <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                            <span className="buy-again-message">Add to Cart</span>
                                        </button>
                                    </div>

                                    <div className="product-actions">
                                        <a href="/tracking">
                                            <button className="track-package-button button-secondary">
                                                Track package
                                            </button>
                                        </a>
                                    </div>
                                </div >
                            </div>

                        )

                    })}

                </div>
            </div>
        </>
    );
}