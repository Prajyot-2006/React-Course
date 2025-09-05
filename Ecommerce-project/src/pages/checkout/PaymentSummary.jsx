import axios from "axios"
import { useNavigate } from "react-router";

export function PaymentSummary ( {paymentSummary , loadCart} ) {
    const navigate = useNavigate(); // useNavigate gives us a function which lets us navigate to(go to) another page in our app

    const createOrder = async () => {
        await axios.post('http://localhost:3000/api/orders') // to make or create something we use post 
        await loadCart();
        navigate('/orders'); // navigate is not asynchronous so it finishes immediately so we dont need to write await in front of it 
// navigate from react-router is only for navigating to frontend routes inside your React app (like /checkout, /orders, /profile).
// It cannot navigate to a backend API endpoint (http://localhost:3000/api/orders). That’s why React Router complains:
    }
    return (
            <div className="payment-summary">
                <div className="payment-summary-title">
                    Payment Summary
                </div>

                {paymentSummary && (
                    <>
                        <div className="payment-summary-row">
                            <div>Items ({paymentSummary.totalItems}):</div>
                            <div className="payment-summary-money">${(paymentSummary.productCostCents / 100).toFixed(2)}</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">${(paymentSummary.shippingCostCents / 100).toFixed(2)}</div>
                        </div>

                        <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">${(paymentSummary.totalCostBeforeTaxCents / 100).toFixed(2)}</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">${(paymentSummary.taxCents / 100).toFixed(2)}</div>
                        </div>

                        <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">${(paymentSummary.totalCostCents / 100).toFixed(2)}</div>
                        </div>

                        <button className="place-order-button button-primary"
                        onClick={createOrder}>
                            Place your order
                        </button>
                    </>

                )}

            </div>
    )
}