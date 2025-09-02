import './header.css';
import {Link} from 'react-router'
// Link component lets us go to another page without reloading , to use it we just have to replace our link elements or a elements with this Link component. and instead of href, Link component provides a prop called to we must use to to go another page 
// chatgpt this(Lnk component) for better understanding also routing 
// so when using react-router we should use <Link> instead of <a> because <Link> = go to another page without reloading  
export function Header(props) {
    const cart = props.cart;
    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity = totalQuantity + cartItem.quantity

    })
    return (
        <>
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                    <img className="search-icon" src="images/icons/search-icon.png" />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
        </>

    );
}