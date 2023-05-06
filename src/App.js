import React from 'react';
import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter >
        <Switch>

          <Route path="/login" exact={true}>
            <Login />
          </Route>

          <Route path="/" exact={true}>
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;