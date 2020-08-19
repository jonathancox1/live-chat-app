import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './ChatRoom.css'

const ChatRoom = () => {
    
    return (
        
        <>
            <div className="top-container"></div>
            <div className="chat-container"></div>
            <input className="message" type="text"></input>
            <button clasName="enter-button">Enter</button>
        </>
        
    )
}


export default ChatRoom;