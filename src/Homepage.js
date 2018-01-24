import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import $ from 'jquery'
import Home from './Home'
import typer from 'typer-js/typer'
import Basket from './images/bask.png'


class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    typer('.words').line('Get NBA Playoff Standings').pause(600).back('all')
      .line('Look Up Every Game of the NBA Season').pause(600)
        .back('all').line('Talk Smack')
  }

  render() {

    return (
        <div>
          <Home teams={this.props.teams}/>
          <div className="typeWords">
            <img className="bask" src={Basket} />
            <h2 className="words"></h2>
          </div>
        </div>
    );
  }
}

export default Homepage;
