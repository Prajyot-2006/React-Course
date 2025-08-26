import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css';

export function ChatInput(props) {
    const array1 = useState('');
    const inputText = array1[0];  // contains empty string 
    const setInputText = array1[1];  // a fn which is used to update the inputText variable

    function saveInputText(event) {
    //console.log(event.target) // event.target= gives us the element that we're typing
    //console.log(event.target.value)  // event.target.value= gives us the text that we're typing or we've typed
    setInputText(event.target.value)
    }

    function sendMessage() {
    //console.log(inputText);
    const newChatMessages = [ // so the way hat the updated fn works is : its gonna replace the entire chatMessages array with a new array , 1st we need to make a copy of this array(chatMessages)
        ...props.chatMessages, // goto 02-spread-operator.js for understanding , in short we created a copy of chatMessages
        {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
        }
    ]
    props.setChatMessages(newChatMessages);  // calling the fn or updating the ChatMessages variable

    const response = Chatbot.getResponse(inputText);  // this is an external library's object , we were using/loading this from script tag now we are using/loading this from supersimpledev pacakge that we downloaded , it will get download in node module
    console.log('The response is ',response)
    props.setChatMessages([ // so the way that the updated fn works is : its gonna replace the entire chatMessages array with a new array , 1st we need to make a copy of this array(chatMessages)
        ...newChatMessages, // goto 02-spread-operator.js for understanding , in short we created a copy of chatMessages
        {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
        }
    ]);
    setInputText('')
    }


    return (    
        <div className="chat-input-container" > {/*we cannot style fragments with css , since fragments dont actually appear on website , instead we gonna switch this container with a div element so that we can style it*/}
        <input className="input-tag" placeholder="Send a message to Chatbot" size="60" onChange={saveInputText} value={inputText} ></input> {/* Note: now everytime when we change the text in this input it will run this function. onChange = runs a func when we change the text inside an input. value = lets us change the value of this input or the text inside this input , if u have confusion in value atribute in input tag just visit 07-value-doubt.html         */}
        <button onClick={sendMessage} className="send-button" >Send</button> 
        </div>
    )
}
