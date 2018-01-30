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
import typer from './typer-js/typer'
import Basket from './images/bask.png'


class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    typer('.words').line('Get NBA Playoff Standings &#10003;').pause(600).back('all')
      .line('Look Up Every Game of the NBA Season &#10003;').pause(600).back('all')
        .line('See who balled out. &#10003;').pause(600).back('all')
          .line('Talk Smack &#10003;')
  }

  render() {

    var header = 'Buckets.life'

    return (
        <div>
          <Home teams={this.props.teams}/>
          <div className="typeWords">
            <h1 className="words3">{header}</h1>
            <img className="bask" src={Basket} />
            <h2 className="words"></h2>
          </div>
          <div className="typeWords2">
          <h1>{header}</h1>
          <img className="bask" src={Basket} />
            <p className="words2">Get NBA Playoff Standings. &#10003;<br/>
            Look Up Every Game of the NBA Season. &#10003;<br/>See who balled out. &#10003;<br/>Talk Smack. &#10003;</p>
          </div>
        </div>
    );
  }
}

export default Homepage;
