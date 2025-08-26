// we have run the 06-exercise.html from "L4- CSS with React" folder using react setup , thast nothing but exercise of L5- Proper React SetUp

import { useState } from 'react'


import './App.css'


function App() {

    const array = useState(true);
    const isInVisible = array[0];
    const setIsInVisible = array[1]; 

    function prajyot() {
        if(isInVisible){
            setIsInVisible(false);
        }
        if(!isInVisible){
            setIsInVisible(true);
        }
    }

    let convert = "";
    if (isInVisible) {
        convert = "password";
    }

    else {
        convert = "text";
    }
    

    return(
        <>
        <p className="para" >Hello , welcome to my website</p>
        <input  className="email" placeholder="Email" ></input>
        <br></br>
        <input  className="pass" placeholder="Password" type={convert} ></input>
        <button className="show" onClick={prajyot} >Show</button>
        <br></br>

        <button className="logIn" >LogIn</button>
        <button className="signUp" >SignUp</button>
        </>
    )
}


export default App
