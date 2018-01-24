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


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      teamDivs: []
    }
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
            <Link to='/easternconfstandings'><span className="navItem">Eastern Conference Standings</span></Link>
            <Link to='/westernconfstandings'><span className="navItem">Western Conference Standings</span></Link>
            <span className="navItem" id="teams">Teams
            <div className="dropDownContainer">
              {teamDivs}
            </div>
            </span>
          </nav>

        </div>
    );
  }
}

export default Home;
