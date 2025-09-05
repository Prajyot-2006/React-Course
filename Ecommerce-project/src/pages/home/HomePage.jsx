// Lets create a component for homepage using react
// we are making supersimple.dev/projects/ecommerce
import { Header } from '../../components/Header';
import './HomePage.css';
import { useEffect , useState} from 'react';
//import { products } from '../../starting-code/data/products';
import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';

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
    const loadCart = props.loadCart;
    
/*
// when homepage re-renders then the entire product also re-renders so instead of re-rendering entire product when homepage re-renders we gonna put the products into useEffect an set dependency array as empty so that it will run only once when the component is created 
    useEffect(() => {
        axios.get('http://localhost:3000/api/products').then((response) => {  // backend's reply is stored in response parameter (infuture)
            setProducts(response.data);
        }); // axios = is the cleaner way to make requests to the backend its just like the fetch which we did or commented but in a cleaner form 

        
    } , [] ); // dependency array = let us control when useEffect runs  , [] = an empty array means only run once after the component is created 
    
*/
// doing the axios code(upper commented code) using async await 
// async await = lets us write asynchronous code like normal code
    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('http://localhost:3000/api/products')  
            setProducts(response.data);

        }
        getHomeData();
    } , [] ); 
    


    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart} />


            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>

        </>

    );
}