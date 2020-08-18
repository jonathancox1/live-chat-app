import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FirstPage from './components/FirstPage'
import ChatRoom from './components/ChatRoom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={FirstPage}></Route>
        <Route path="/chatroom" component={ChatRoom}></Route>
      </Router>
    </div>
  );
}

export default App;
