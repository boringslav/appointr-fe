import {useContext, useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import {WEBSOCKET_URL} from "../../services/api";
import "./Chat.css";


const Chat = () => {
    const {user} = useContext(UserContext);
    const [userData, setUserData] = useState({
        username: user.email,
        recievername: "",
        connected: false,
        message: ""
    });

    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);


    useEffect(() => {
        const Sock = new SockJS(WEBSOCKET_URL);
        const stompClient = over(Sock);
        setStompClient(stompClient);
        stompClient.connect({Authorization: user.access_token}, onConnected, onError);
    }, [])

    const onConnected = () => {
        setUserData({...userData, connected: true});
        stompClient.subscribe('/chatroom/public', onMessageReceived);
    }
    const onError = (err) => {
        console.error(err);
    }

    const onMessageReceived = (payload) => {
        console.log("Received message: ", payload);
        const payloadData = JSON.parse(payload.body);
        setMessages(messages =>[...messages, payloadData]);
    }

    const handleMessage = (event) => {
        const {value} = event.target;
        setUserData({...userData, "message": value});
    }
    const sendValue = () => {
        if (stompClient) {
            const chatMessage = {
                senderName: userData.username,
                message: userData.message,
                status: "MESSAGE"
            };
            stompClient.send("/message", {}, JSON.stringify(chatMessage));
            setUserData({...userData, "message": ""});

            console.log('Chat message', chatMessage);
        }
    }


    return <>
        {userData.connected && (
            <>
                <div className="chat-box">

                    <div className="chat-content">
                        <ul className="chat-messages">
                            {messages.map((chat, index) => (
                                <li className={`message ${chat.senderName === userData.username && "self"}`}
                                    key={index}>
                                    {chat.senderName !== userData.username &&
                                        <div className="avatar">{chat.senderName}</div>}
                                    <div className="message-data">{chat.message}</div>
                                    {chat.senderName === userData.username &&
                                        <div className="avatar self">{chat.senderName}</div>}
                                </li>
                            ))}
                        </ul>

                        <div className="send-message">
                            <input type="text" className="input-message" placeholder="enter the message"
                                   value={userData.message} onChange={handleMessage}/>
                            <button type="button" className="send-button" onClick={sendValue}>send</button>
                        </div>
                    </div>
                </div>
            </>
        )}
    </>
}
export default Chat;
