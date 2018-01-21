import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import moment from 'moment'
import hawksLogo from './images/hawks.jpg'

class EasternConf extends Component {
  constructor(){
    super()
    this.state = {
      teams: []
    }
  }

  componentDidMount(){
    var date = new Date()
    var formattedDate = moment(date).format('YYYYMMDD')
    $.ajax({
        type: 'get',
        url: `https://calm-dawn-83504.herokuapp.com/http://data.nba.net/data/10s/prod/v1/${formattedDate}/standings_division.json`,
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
      let hawks = Object.assign({}, this.state.teams[0])
      hawks.img = hawksLogo
      this.setState({hawks})
      console.log(this.state.hawks)
  })
}

  render() {

    var teamDivs = this.state.teams.map(function(team){
      return <div key={team.teamId}>
                <p>{team.fullName}</p>

              </div>
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
