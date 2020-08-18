import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './FirstPage.css'

const FirstPage = () => {
    const [name, setName] = useState('')
    const [roomCode, setRoomCode] = useState('')

    const handleName = (e) => {
        console.log(e.currentTarget.value)
        setName(e.currentTarget.value)
    }

    const handleRoom = (e) => {
        console.log(e.currentTarget.value)
        setRoomCode(e.currentTarget.value)
    }

    return (
        <form>
            <div>
                <h1 className="top-header">Join the live chat!</h1>
            </div>
            <div className="form-group">
                <label>Your name</label>
                <input type="email" onChange={handleName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div className="form-group">
                <label>Room code</label>
                <input type="text" onChange={handleRoom} className="form-control" id="exampleInputPassword1"></input>
            </div>
            <div className="button-container">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}





export default FirstPage;