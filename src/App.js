import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import moment from 'moment'

class EasternConf extends Component {
  constructor(){
    super()
    this.state = {
      teams: []
    }
  }

  componentDidMount(){
    $.ajax({
        type: 'get',
        url: 'https://calm-dawn-83504.herokuapp.com/http://data.nba.net/data/10s/prod/v1/20180120/standings_division.json',
        dataType: 'json'
    }).done((response) => {
        console.log(response)
  })

  $.ajax({
      type: 'get',
      url: 'https://calm-dawn-83504.herokuapp.com/http://data.nba.net/data/10s/prod/v1/2017/teams.json',
      dataType: 'json'
  }).done((response) => {
      var eastTeams = response.league.standard.filter(function(team){
        return team.confName === 'East' && team.fullName !== 'World' && team.fullName !== 'USA'
      })
      this.setState({teams: eastTeams})
      console.log(this.state.teams)
  })
  var date = new Date()
  console.log(moment(date).format('YYYYMMDD'))
}

  render() {

    var teamDivs = this.state.teams.map(function(team){
      return <div key={team.teamId}>{team.fullName}</div>
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { teamDivs }
      </div>
    );
  }
}

export default EasternConf;
