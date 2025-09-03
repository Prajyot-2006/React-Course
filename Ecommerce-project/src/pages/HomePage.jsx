// Lets create a component for homepage using react
// we are making supersimple.dev/projects/ecommerce
import { Header } from '../components/Header';
import './HomePage.css';
import { useEffect , useState} from 'react';
//import { products } from '../../starting-code/data/products';
import axios from 'axios';

export function HomePage(props) {
// one way to get data from the backend is to use fetch , so fetch is a built-in fn provided by JS
/*    fetch('http://localhost:3000/api/products').then((response) => {
        //console.log(response);
        response.json().then((data) => {  // data is related to products  , // .json gives us the data that is attach to the response and its a asynchronous code so we cant store it in a variable ,its also a promise so we can use .then 
            console.log(data)  // it will give an array of products

        })  

    });  // btwn a bracket we gonna create a string and we gonna put a url that we wanna get data from // so if we fetch data from this url , this should give us the products data that we saw earlier. however we cannot save data in a variable like this const a = fetch('https://') thats because when we contact a backend it takes time for this code(const a = ...) to reach the backend and to get a response // when backend gives response then it will run the fn inside .then
*/            
// we can use axios to do the above code(fetch code) or instead of using above code we can also use axios
// axios = cleaner way to make requests to the backend

// the url path /api/products = gives us the product data
// the url path /api/cart-items = gives us the cart data
    const [products , setProducts] = useState([]);
    const cart = props.cart;
    

// when homepage re-renders then the entire product also re-renders so instead of re-rendering entire product when homepage re-renders we gonna put the products into useEffect an set dependency array as empty so that it will run only once when the component is created 
    useEffect(() => {
        axios.get('http://localhost:3000/api/products').then((response) => {  // backend's reply is stored in response parameter (infuture)
            setProducts(response.data);
        }); // axios = is the cleaner way to make requests to the backend its just like the fetch which we did or commented but in a cleaner form 

        
    } , [] ); // dependency array = let us control when useEffect runs  , [] = an empty array means only run once after the component is created 
    
    

    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart} />


            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <>
                                <div key= {product.id} className="product-container">
                                    <div className="product-image-container">
                                        <img className="product-image"
                                            src={product.image} />
                                    </div>

                                    <div className="product-name limit-text-to-2-lines">
                                        {product.name}
                                    </div>

                                    <div className="product-rating-container">
                                        <img className="product-rating-stars"
                                            src={`images/ratings/rating-${product.rating.stars * 10}.png`}/>

                                        <div className="product-rating-count link-primary">
                                            {product.rating.count}
                                        </div>
                                    </div>

                                    <div className="product-price">
                                        ${(product.priceCents / 100).toFixed(2)}  {/* this will convert into a string */}
                                    </div>

                                    <div className="product-quantity-container">
                                        <select>
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

                                    <button className="add-to-cart-button button-primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </>


                        );
                    })}





                </div>
            </div>

        </>

    );
}