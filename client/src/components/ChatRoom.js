import React, { useState, useEffect, useContext } from 'react'
import io from 'socket.io-client'
import './ChatRoom.css'
import { ChatContext } from '../ChatContext'
import ScrollToBottom from 'react-scroll-to-bottom'


const ChatRoom = () => {
    const { userName, setUserName } = useContext(ChatContext)
    const { roomCode, setRoomCode } = useContext(ChatContext)
    const [message, setMessage] = useState('')
    const [chats, setChats] = useState([])

    const handleMessage = (e) => {
        var newMessage = e.currentTarget.value
        // console.log(newMessage)
        setMessage(newMessage)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Message submitted')
        setMessage("")
        chats.push(message)
    }

    const renderChat = () => {
        return chats.map((message, index) => {
            return <div key={index}>
            <p>{userName} : {message}</p>
            </div>
        })
    }

    return (
        <>
            <div className="top-container">
                <h2>123</h2>
            </div>
            <div className="chat-container">
            {renderChat()}
            </div>
            <form className="form-inline" onSubmit={handleSubmit}>
                <input type="text" onChange={handleMessage} value={message} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Type your message here..."/>
                <button type="submit" className="btn btn-primary mb-2">Send</button>
            </form>
        </>
        
    )
}


export default ChatRoom;