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
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { ReactTableDefaults } from 'react-table'

Object.assign(ReactTableDefaults, {
  showPagination: false
})

class BoxScore extends Component {
  constructor(){
    super()
    this.state = {
      selectedGame: {},
      homeTeam: {},
      awayTeam: {}
    }
  }

  componentDidMount(){
    var gameId = this.props.match.params.gid
    var gameDate = this.props.match.params.date
    var url = `https://calm-dawn-83504.herokuapp.com/http://data.nba.net/data/10s/prod/v1/${gameDate}/${gameId}_boxscore.json`
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        success: ((response) => {

          this.setState({selectedGame: response}, function(){
            console.log(this.state.selectedGame)
          })

          var homeTeam = response.basicGameData.hTeam.triCode
          var awayTeam = response.basicGameData.vTeam.triCode

          this.props.teams.forEach((team)=>{
            if (team.tricode === homeTeam) {
              this.setState({homeTeam: team})
            }
          })
          this.props.teams.forEach((team)=>{
            if (team.tricode === awayTeam) {
              this.setState({awayTeam: team})
            }
          })
        }).bind(this)
      })
   }

  render() {

    if (!$.isEmptyObject(this.state.homeTeam) && !$.isEmptyObject(this.state.awayTeam) && !$.isEmptyObject(this.state.selectedGame)) {
    return <div className="matchup">
      <div>
        <h2>{this.state.awayTeam.fullName}</h2>
        <img src={this.state.awayTeam.img} />
        <h1>{this.state.selectedGame.basicGameData.vTeam.score}</h1>
      </div>
      <div><h1>at</h1></div>
      <div>
        <h2>{this.state.homeTeam.fullName}</h2>
        <img src={this.state.homeTeam.img} />
        <h1>{this.state.selectedGame.basicGameData.hTeam.score}</h1>
      </div>
    </div>
  } else {
    return <div>loading</div>
  }
 }
}

export default BoxScore;
