import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

export function ChatMessage(props) {  
    console.log('This is props : ',props); 
    const message = props.message
    const sender = props.sender

    if (sender === "robot") {
    return (
    <div className="chat-message-robot"> 
    <img src={RobotProfileImage} width="50" className="chat-message-profile" />
    <div className="chat-message-text" >
    {message}
    </div>
    </div>
);
}

return (
    <div className="chat-message-user">  
        <div className="chat-message-text" >
        {message}
        </div>
        <img src={UserProfileImage} width="50" className="chat-message-profile" />
    </div>
);
    
}