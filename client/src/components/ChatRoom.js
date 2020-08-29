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
    const ENDPOINT = 'localhost:5000'

 
    useEffect(() => {
        const { userName, roomCode } = queryString.parse(location.search)

        const socket = io(ENDPOINT)
        
        setUserName(userName)
        setRoomCode(roomCode)

        socket.emit('chatroom-join', {userName, roomCode})

        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT, location.search])

    // useEffect(() => {
    //     const socket = io(ENDPOINT)
        
    //     socket.on('message', (message) => {
    //         setChats([...chats, message])
    //     }, [])
    // })

    const handleMessage = (e) => {
        var newMessage = e.currentTarget.value
        setMessage(newMessage)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const socket = io(ENDPOINT)
        console.log(socket)
        console.log(socket.id)
        console.log('zzzzzzzzz')
        setMessage("")
        chats.push(message)
        // if (message) {
        //     socket.emit('sendMessage', {message, userName, roomCode}, () => setMessage(""))
        // }
    }
    // console.log(chats)
    // console.log('zzzzzzzzzz')

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
                <input type="text" className="message-input" onChange={handleMessage} value={message} placeholder="Type message..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="message-button" type="submit">Send</button>
            </form>
        </>
        
    )
}


export default ChatRoom;