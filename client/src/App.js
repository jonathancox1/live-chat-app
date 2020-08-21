import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FirstPage from './components/FirstPage'
import ChatRoom from './components/ChatRoom'
import { ChatContext } from './ChatContext';

function App() {

  const [userName, setUserName] = useState(null)
  const [roomCode, setRoomCode] = useState(null)


  return (
    <div className="App">
      <Router>
        <ChatContext.Provider value={{userName, setUserName, roomCode, setRoomCode}}>
        <Route exact path="/" component={FirstPage}></Route>
        <Route path="/chatroom" component={ChatRoom}></Route>
        </ChatContext.Provider>
      </Router>
    </div>
  );
}

export default App;
