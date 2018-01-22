import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"


class Home extends Component {
  constructor(){
    super()
  }

  render() {

    return (
        <div>
          <p>Welcome to your homepage</p>
          <Link to='/easternconfstandings'>Eastern Conference Standings</Link>
          <br />
          <Link to='/westernconfstandings'>Western Conference Standings</Link>
        </div>
    );
  }
}

export default Home;
