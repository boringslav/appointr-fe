import React, {useContext, useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {WEBSOCKET_URL} from "../../services/api";
import "./Chat.css";
import {Box, Container, List, ListItem, TextField} from "@mui/material";
import Button from "@mui/material/Button";


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
        const socket = new SockJS(WEBSOCKET_URL);
        const stompClient = Stomp.over(socket);
        stompClient.connect({Authorization: user.access_token}, onConnected);
        setStompClient(stompClient);
    }, [])

    const onConnected = () => {
        stompClient.subscribe('/topic/chatroom', onMessageReceived);
        setUserData({...userData, connected: true});

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
            stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
            setUserData({...userData, "message": ""});

            console.log('Chat message', chatMessage);
        }
    }


    return <>
        {userData.connected && (
            <>
                <Box >
                    <Container >
                        <List sx={{minHeight: '80%'}}>
                            {messages.map((chat, index) => (
                                <ListItem className={`message ${chat.senderName === userData.username && "self"}`}
                                    key={index}>
                                    {chat.senderName !== userData.username &&
                                        <div className="avatar">{chat.senderName}</div>}
                                    <div className="message-data">{chat.message}</div>
                                    {chat.senderName === userData.username &&
                                        <div className="avatar self">{chat.senderName}</div>}
                                </ListItem>
                            ))}
                        </List>

                        <Container >
                            <TextField fullWidth
                                   value={userData.message} onChange={handleMessage}/>
                            <Button type="button" sx={{marginTop:"10px"}} size="medium" variant="contained" onClick={sendValue}>send</Button>
                        </Container>
                    </Container>
                </Box>
            </>
        )}
    </>
}
export default Chat;
