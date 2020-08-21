import React, { useState, useEffect, useContext } from 'react'
import io from 'socket.io-client'
import './ChatRoom.css'
import { ChatContext } from '../ChatContext'
import ScrollToBottom from 'react-scroll-to-bottom'


const ChatRoom = () => {
    const { userName, setUserName } = useContext(ChatContext)
    const { roomCode, setRoomCode } = useContext(ChatContext)
    const [message, setMessage] = useState('')

    const handleMessage = (e) => {
        console.log(e.currentTarget.value)
        setMessage(e.currentTarget.value)
    }

    const handleClick = (e) => {
        console.log('Button has clicked')
        e.preventDefault()
    }

    return (
        
        <>
            <div className="top-container">
                <h2>123</h2>
            </div>
            <div className="chat-container"></div>
            <input className="message" type="text" onChange={handleMessage}></input>
            <button className="enter-button" onClick={handleClick}>Enter</button>
        </>
        
    )
}


export default ChatRoom;