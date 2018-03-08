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
import Ball from './images/ball.png'


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleClick(){
      $('.dropDownContainer').toggleClass('visible')
      $('#teams b').text(function(i, v) {
        return v === 'Teams ▼' ? 'Teams ▲' : 'Teams ▼'
      })
  }

  componentDidMount(){
    // <span className="navItem" onClick={this.handleClick} id="teams"><b>Teams ▼</b>
    // <div className="dropDownContainer">
    //   {teamDivs}
    // </div>
    // </span>
  }


  render() {

    var teamDivs = this.props.teams.map(function(team){
      return (
        <Link to={`/teamprofile/${team.fullName}`}><div className="dropDownItem"><p>{team.nickname}</p></div></Link>
      )
    })

    return (
        <div>
          <nav className="navigation">
            <Link to='/'><span className="navItem"><img id="ball" src={Ball}/><b> Home</b></span></Link>
            <Link to='/easternconfstandings'><span className="navItem"><b>Eastern Conference Standings</b></span></Link>
            <Link to='/westernconfstandings'><span className="navItem"><b>Western Conference Standings</b></span></Link>
            <Link to='/playermash'><span className="navItem"><b>Browse Players</b></span></Link>
          </nav>
        </div>
    );
  }
}

export default Home;
