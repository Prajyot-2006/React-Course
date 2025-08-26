import { useRef , useEffect} from 'react'
import { ChatMessage } from './ChatMessage.jsx'
import './ChatMessages.css'


function ChatMessages(props) {
    const chatMessagesRef = useRef(null);  //useRef = automatically save an HTML element from the component

    useEffect(() => {  //  in our project after we add a chatmessage we wanna run some code to scroll to the bottom, so this is a perfect situation for useEffect
        const containerElem = chatMessagesRef.current;
        if(containerElem){
        containerElem.scrollTop = containerElem.scrollHeight;
        }
    } , [props.chatMessages]); // React will run this function - after component is created  or - every time the component is updated  
// the 2nd parameter in useEffect which is an array , it controls when useEffect runs , if we give it an empty array useEffect will only run once, after the component is created, now we keep props.chatMessages in 2nd parameter's array , so React will also run this function(1st parameter) everytime our data(props.chatMessages) changes that means props.chatMessage changes this is know as dependency array
    return(
    <div className="chat-messages-container" ref={chatMessagesRef} >          
        {props.chatMessages.map((chatMessages)=> {  // we know map goes through each value of an array and convert it into new value(based on return statement) , inshort what it return convert it into new value , or it gives us a new array , goto simple-Map-Fn-understanding
            return(       
            <ChatMessage message= {chatMessages.message} sender= {chatMessages.sender} id= {chatMessages.id}/> // we used {} bcoz it is in JSX we must use {} to get other values or to insert other values
            ) // in react if we insert an array of cmponents , we need to give each component a prop key , key = helps react track changes in the array 
        }) // How .map() works : the parameter(chatMessages) contains 1st value for 1st time(iteration) and whatever we returns from the fn will be the new 1st value 
        }
    </div>
    )
}

export default ChatMessages;