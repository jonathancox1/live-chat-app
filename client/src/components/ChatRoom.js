import React, { useState, useEffect, useContext } from 'react'
import io from 'socket.io-client'
import './ChatRoom.css'
import { ChatContext } from '../ChatContext'
import ScrollToBottom from 'react-scroll-to-bottom'
import queryString from 'query-string'


const ChatRoom = ({ location }) => {
    const { userName, setUserName } = useContext(ChatContext)
    const { roomCode, setRoomCode } = useContext(ChatContext)
    const [message, setMessage] = useState('')
    const [chats, setChats] = useState([])

    useEffect(() => {
        const { userName, roomCode } = queryString.parse(location.search)

        setUserName(userName)
        setRoomCode(roomCode)
    })

    const handleMessage = (e) => {
        var newMessage = e.currentTarget.value
        setMessage(newMessage)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                <h2>{roomCode}</h2>
            </div>
            <div>
            <ScrollToBottom className="chat-container">
                {renderChat()}
            </ScrollToBottom>
            </div>
            <form className="form-inline" onSubmit={handleSubmit}>
                <input type="text" onChange={handleMessage} value={message} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Type your message here..."/>
                <button type="submit" className="btn btn-primary mb-2">Send</button>
            </form>
        </>
        
    )
}


export default ChatRoom;