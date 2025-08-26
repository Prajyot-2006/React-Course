import { useState } from 'react'   // this was already downloaded in package 
import './App.css'   // we loaded the css code into this file 
import { ChatInput } from './component/ChatInput';
import ChatMessages from './component/ChatMessages'
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';


// Note : import { useState } from 'react' ,why we are importing it from react only + how do we know useState is present in react file ? , the ans is when we download react-vite it downloads all package related to react , so in react folder of node_module we can import so many other libraries like useState , useRef , hooks etc 
/* the best practice is to load a external library from the node modules instead of using <script> tag which we used to do in previous files
to load the external libraries from node modules we use import 



to load an external libraries from modules(node_modules) we use the word import , then we tell the computer which external library or package we want to load from ,by typing 'from' and then the name of the package like the string 'react'
we dont have to import the entire react library  , we can just import waht we need , like (useState)
now that we have imported useState we can just use it instead of doing like this React.useState() which we were used to do in script tag
*/





    const container = document.querySelector('.js-container');
    console.log(container)



// Note : btw in React we should put our hooks at the top of the component and they should not be inside in anything



    function App(){

      const array = useState([  // no need to write like React.useState() coz we already imported useState from modules in this file
        {   
        message: 'hello chatbot',
        sender: 'user',
        id: 'id1'
        },
        {
          message: 'Hello! How can I help you?',
          sender: 'robot',
          id: 'id2'
        },
        {
          message: 'Can you get me Todays date?',
          sender: 'user',
          id: 'id3'
        },
        {
          message: 'Today is July 25',
          sender: 'robot',
          id: 'id4'
        }
      ])
      const chatMessages = array[0]; 
      console.log('This is useStates 1st value',chatMessages);
      const setChatMessages = array[1]; 
      console.log('This is useStates 2nd value or fn',setChatMessages);

      return(  
        <div className="app-container" > 
            <ChatMessages chatMessages={chatMessages}/>       
            <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>     
        </div>
      )
    }

export default App
