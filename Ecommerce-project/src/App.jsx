
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { Routes , Route } from 'react-router'  // we gonna use routes thats why we are loading it
import { Orders } from './pages/OrdersPage'
import { Tracking } from './pages/TrackingPage'
import './App.css'


function App() {
  /* <Routes> = tells React all the pages that are in our website , 
  to add a page on our website we gonna use another component called route 
  a route is basically a page , so 1st we need to import that


  */
  return (
    <Routes>  
      <Route path="/" element={<HomePage />}></Route>  {/*we gonna give this Route component 2 props 1st prop is path (this tells react the URL path of the page) for the homepage the url path is empty so thast why we gave / to path.  2nd prop is element , this tells react which element or component to display*/}
      <Route path="checkout" element={<CheckoutPage />}></Route>
      <Route path="orders" element={<Orders />}></Route>
      <Route path="tracking" element={<Tracking />}></Route>
    </Routes>
  )
}

export default App

// routng is actually pretty simple , we just tell react which pages we want in our website and then waht to display for each page


// in lesson 6 we learned