import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"


class TeamProfile extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render() {

    const team1 = this.props.match.params.teamName
    var selectedTeam = this.props.teams.filter(function(team){
      return team.fullName === team1
    })
    console.log(selectedTeam)
    var mapTeam = selectedTeam.map(function(team){
      return (
        <h2>{team.fullName}</h2>
      )
    })

    return (
        <div>
          Team Profile
          {mapTeam}
        </div>
    );
  }
}

export default TeamProfile;
