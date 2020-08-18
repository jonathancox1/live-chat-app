import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './FirstPage.css'

function FirstPage () {
    return (
        <form>
            <div>
                <h1 className="top-header">Join the live chat!</h1>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Your name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Room code</label>
                <input type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <div className="button-container">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}





export default FirstPage;