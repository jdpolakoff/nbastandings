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
import moment from 'moment'
import ReactDisqusComments from 'react-disqus-comments'


Object.assign(ReactTableDefaults, {
  showPagination: false
})

class BoxScore extends Component {
  constructor(){
    super()
    this.state = {
      selectedGame: {},
      homeTeam: {},
      awayTeam: {},
      formatted: {}
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
      var uniqueId = this.state.selectedGame.basicGameData.gameId
      var url = `https://smackboards.herokuapp.com/gameboxscore/${this.props.match.params.date}/${this.props.match.params.gid}`
      var matchup = `${this.state.awayTeam.fullName} vs. ${this.state.homeTeam.fullName}`
    return (
    <div>
      <div className="matchup">
        <div>
          <h2>{this.state.awayTeam.fullName}<br/>{`(${this.state.selectedGame.basicGameData.vTeam.win}-${this.state.selectedGame.basicGameData.vTeam.loss})`}</h2>
          <img src={this.state.awayTeam.img} />
          <h1>{this.state.selectedGame.basicGameData.vTeam.score}</h1>
        </div>
        <div>
          <h2>{this.state.homeTeam.fullName}<br/>{`(${this.state.selectedGame.basicGameData.hTeam.win}-${this.state.selectedGame.basicGameData.hTeam.loss})`}</h2>
          <img src={this.state.homeTeam.img} />
          <h1>{this.state.selectedGame.basicGameData.hTeam.score}</h1>
        </div>
      </div>
        <div className="synopsis">
          <h1>Just the facts:</h1>
          <h2>Game was at {this.state.selectedGame.basicGameData.arena.name} on {moment(this.state.selectedGame.basicGameData.startTimeUTC).format('MM/DD/YYYY')}</h2>
          <h2>{this.state.selectedGame.basicGameData.nugget.text}</h2>
          <h2>{this.state.homeTeam.fullName}: {this.state.selectedGame.stats.hTeam.fastBreakPoints} fast-break points, {this.state.selectedGame.stats.hTeam.pointsInPaint} points in the paint, {this.state.selectedGame.stats.hTeam.secondChancePoints} second-chance points, {this.state.selectedGame.stats.hTeam.pointsOffTurnovers} points off turnovers.</h2>
          <h2>{this.state.awayTeam.fullName}: {this.state.selectedGame.stats.vTeam.fastBreakPoints} fast-break points, {this.state.selectedGame.stats.vTeam.pointsInPaint} points in the paint, {this.state.selectedGame.stats.vTeam.secondChancePoints} second-chance points, {this.state.selectedGame.stats.vTeam.pointsOffTurnovers} points off turnovers.</h2>
        </div>
        <ReactDisqusComments
          shortname="nbasmack"
          title={matchup}
          identifier={uniqueId}
          url={url}
        />
    </div>
  )
  } else {
    return <div>loading...</div>
  }
 }
}

export default BoxScore;
