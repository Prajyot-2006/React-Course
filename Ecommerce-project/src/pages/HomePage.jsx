// Lets create a component for homepage using react
// we are making supersimple.dev/projects/ecommerce
import { Header } from '../components/Header';
import './HomePage.css';
import { products } from '../../starting-code/data/products';

export function HomePage() {
// one way to get data from the backend is to use fetch , so fetch is a built-in fn provided by JS
    fetch('http://localhost:3000/api/products').then((response) => {
        //console.log(response);
        response.json().then((data) => {  // data is related to products  , // .json gives us the data that is attach to the response and its a asynchronous code so we cant store it in a variable ,its also a promise so we can use .then 
            console.log(data)  // it will give an array of products

        })  

    });  // btwn a bracket we gonna create a string and we gonna put a url that we wanna get data from // so if we fetch data from this url , this should give us the products data that we saw earlier. however we cannot save data in a variable like this const a = fetch('https://') thats because when we contact a backend it takes time for this code(const a = ...) to reach the backend and to get a response // when backend gives response then it will run the fn inside .then
            
    
    return (
        <>
            <title>Ecommerce Project</title>

            <Header />


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