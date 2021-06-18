import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chats from "./Chats";
import ChatView from "./ChatView";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_body">
          <Switch>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route path="/chats/view">
              <ChatView />
            </Route>
            <Route path="/chats">
              <Chats />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
