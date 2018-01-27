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
  constructor(props){
    super(props)
    this.state = {
      selectedGame: {},
      homeTeam: {},
      awayTeam: {},
      formatted: {},
      players: []
    }
  }


  componentDidMount(){
    var players = this.props.players
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
            this.state.selectedGame.stats.hTeam.leaders.assists.players.forEach(function(player){
              players.forEach(function(guy){
                if (parseInt(player.personId) === parseInt(guy.playerId)) {
                  var first = guy.firstName
                  var realLast = guy.lastName
                  var last = guy.lastName.split("''").join('')
                  if (last.includes(' Jr.')){
                    last = last.replace(' Jr.', '_jr')
                  }
                  var url = `https://nba-players.herokuapp.com/players/${last}/${first}`
                  player['first'] = first
                  player['last'] = realLast
                  player['img'] = url
              }
            })
          })

            this.state.selectedGame.stats.vTeam.leaders.assists.players.forEach(function(player){
              players.forEach(function(guy){
                if (parseInt(player.personId) === parseInt(guy.playerId)) {
                  var first = guy.firstName
                  var realLast = guy.lastName
                  var last = guy.lastName.split("''").join('')
                  if (last.includes(' Jr.')){
                    last = last.replace(' Jr.', '_jr')
                  }
                  var url = `https://nba-players.herokuapp.com/players/${last}/${first}`
                  player['first'] = first
                  player['last'] = realLast
                  player['img'] = url
                }
              })
            })

            this.state.selectedGame.stats.vTeam.leaders.points.players.forEach(function(player){
              players.forEach(function(guy){
                if (parseInt(player.personId) === parseInt(guy.playerId)) {
                  var first = guy.firstName
                  var realLast = guy.lastName
                  var last = guy.lastName.split("''").join('')
                  if (last.includes(' Jr.')){
                    last = last.replace(' Jr.', '_jr')
                  }
                  var url = `https://nba-players.herokuapp.com/players/${last}/${first}`
                  player['first'] = first
                  player['last'] = realLast
                  player['img'] = url
                }
              })

            })

            this.state.selectedGame.stats.hTeam.leaders.points.players.forEach(function(player){
              players.forEach(function(guy){
                if (parseInt(player.personId) === parseInt(guy.playerId)) {
                  var first = guy.firstName
                  var realLast = guy.lastName
                  var last = guy.lastName.split("''").join('')
                  if (last.includes(' Jr.')){
                    last = last.replace(' Jr.', '_jr')
                  }
                  var url = `https://nba-players.herokuapp.com/players/${last}/${first}`
                  player['first'] = first
                  player['last'] = realLast
                  player['img'] = url
                }
              })
            })

            this.state.selectedGame.stats.vTeam.leaders.rebounds.players.forEach(function(player){
              players.forEach(function(guy){
                if (parseInt(player.personId) === parseInt(guy.playerId)) {
                  var first = guy.firstName
                  var realLast = guy.lastName
                  var last = guy.lastName.split("''").join('')
                  if (last.includes(' Jr.')){
                    last = last.replace(' Jr.', '_jr')
                  }
                  var url = `https://nba-players.herokuapp.com/players/${last}/${first}`
                  player['first'] = first
                  player['last'] = realLast
                  player['img'] = url
                }
              })

            })

            this.state.selectedGame.stats.hTeam.leaders.rebounds.players.forEach(function(player){
              players.forEach(function(guy){
                if (parseInt(player.personId) === parseInt(guy.playerId)) {
                  var first = guy.firstName
                  var realLast = guy.lastName
                  var last = guy.lastName.split("''").join('')
                  if (last.includes(' Jr.')){
                    last = last.replace(' Jr.', '_jr')
                  }  
                  var url = `https://nba-players.herokuapp.com/players/${last}/${first}`
                  player['first'] = first
                  player['last'] = realLast
                  player['img'] = url
                }
              })
            })


          })


          var homeTeam = response.basicGameData.hTeam.triCode
          var awayTeam = response.basicGameData.vTeam.triCode

          console.log(this.state.selectedGame.stats.vTeam.leaders.rebounds.players)

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
      var highHomePoints = this.state.selectedGame.stats.hTeam.leaders.points.value
      var homePoints = this.state.selectedGame.stats.hTeam.leaders.points.players.map(function(player){
        return (
          <div>
            <img className="headshot" src={player.img}/>
            <p className="playerDesc">{player.first} {player.last}<br/>
               {highHomePoints} points</p>
          </div>
        )
      })
      var highHomeRebounds = this.state.selectedGame.stats.hTeam.leaders.rebounds.value
      var homeRebounds = this.state.selectedGame.stats.hTeam.leaders.rebounds.players.map(function(player){
        return (
          <div>
            <img className="headshot" src={player.img}/>
            <p className="playerDesc">{player.first} {player.last}<br/>
               {highHomeRebounds} rebounds</p>
          </div>
        )
      })
      var highHomeAssists = this.state.selectedGame.stats.hTeam.leaders.assists.value
      var homeAssists = this.state.selectedGame.stats.hTeam.leaders.assists.players.map(function(player){
        console.log(player)
        return (
          <div>
            <img className="headshot" src={player.img}/>
            <p className="playerDesc">{player.first} {player.last}<br/>
               {highHomeAssists} assists</p>
          </div>
        )
      })
      var highAwayPoints = this.state.selectedGame.stats.vTeam.leaders.points.value
      var awayPoints = this.state.selectedGame.stats.vTeam.leaders.points.players.map(function(player){
        return (
          <div>
            <img className="headshot" src={player.img}/>
            <p className="playerDesc">{player.first} {player.last}<br/>
               {highAwayPoints} points</p>
          </div>
        )
      })
      var highAwayRebounds = this.state.selectedGame.stats.vTeam.leaders.rebounds.value
      var awayRebounds = this.state.selectedGame.stats.vTeam.leaders.rebounds.players.map(function(player){
        return (
          <div>
            <img className="headshot" src={player.img}/>
            <p className="playerDesc">{player.first} {player.last} <br/>
            {highAwayRebounds} rebounds</p>
          </div>
        )
      })
      var highAwayRebounds = this.state.selectedGame.stats.vTeam.leaders.assists.value
      var awayAssists = this.state.selectedGame.stats.vTeam.leaders.assists.players.map(function(player){
        return (
          <div>
            <img className="headshot" src={player.img}/>
            <p className="playerDesc">{player.first} {player.last}<br/>
               {highHomeRebounds} assists</p>
          </div>
        )
      })
      var uniqueId = this.state.selectedGame.basicGameData.gameId
      var url = `https://smackboards.herokuapp.com/gameboxscore/${this.props.match.params.date}/${this.props.match.params.gid}`
      var matchup = `${this.state.awayTeam.fullName} vs. ${this.state.homeTeam.fullName}`
    return (
    <div>
      <div className="matchup">
        <div className="innerMatchup">
          <h2>{this.state.awayTeam.fullName}<br/>{`(${this.state.selectedGame.basicGameData.vTeam.win}-${this.state.selectedGame.basicGameData.vTeam.loss})`}</h2>
          <img className="matchupLogo" src={this.state.awayTeam.img} />
          <h1>{this.state.selectedGame.basicGameData.vTeam.score}</h1>
          <h3>Team Leaders</h3>
          <table className="playerStats">
            <thead>
              <tr>
              <th className="th">Points</th>
              <th className="th">Rebounds</th>
              <th className="th">Assists</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{awayPoints}</td>
              <td>{awayRebounds}</td>
              <td>{awayAssists}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2>{this.state.homeTeam.fullName}<br/>{`(${this.state.selectedGame.basicGameData.hTeam.win}-${this.state.selectedGame.basicGameData.hTeam.loss})`}</h2>
          <img className="matchupLogo" src={this.state.homeTeam.img} />
          <h1>{this.state.selectedGame.basicGameData.hTeam.score}</h1>
          <h3>Team Leaders</h3>
          <table className="playerStats">
            <thead>
              <tr>
              <th className="th">Points</th>
              <th className="th">Rebounds</th>
              <th className="th">Assists</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{homePoints}</td>
              <td>{homeRebounds}</td>
              <td>{homeAssists}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="synopsis">
        <blockquote>
          <h2>Game was at {this.state.selectedGame.basicGameData.arena.name} on {moment(this.state.selectedGame.basicGameData.startTimeUTC).format('MM/DD/YYYY')}</h2>
          <h2>{this.state.selectedGame.basicGameData.nugget.text}</h2>
          <h2>{this.state.homeTeam.nickname}: {this.state.selectedGame.stats.hTeam.fastBreakPoints} fast-break points, {this.state.selectedGame.stats.hTeam.pointsInPaint} points in the paint, {this.state.selectedGame.stats.hTeam.secondChancePoints} second-chance points, {this.state.selectedGame.stats.hTeam.pointsOffTurnovers} points off turnovers.</h2>
          <h2>{this.state.awayTeam.nickname}: {this.state.selectedGame.stats.vTeam.fastBreakPoints} fast-break points, {this.state.selectedGame.stats.vTeam.pointsInPaint} points in the paint, {this.state.selectedGame.stats.vTeam.secondChancePoints} second-chance points, {this.state.selectedGame.stats.vTeam.pointsOffTurnovers} points off turnovers.</h2>
        </blockquote>
      </div>
      <div className="synopsis2">
          <h2>Game was at {this.state.selectedGame.basicGameData.arena.name} on {moment(this.state.selectedGame.basicGameData.startTimeUTC).format('MM/DD/YYYY')}</h2>
          <h2>{this.state.selectedGame.basicGameData.nugget.text}</h2>
          <h2>{this.state.homeTeam.nickname}: {this.state.selectedGame.stats.hTeam.fastBreakPoints} fast-break points, {this.state.selectedGame.stats.hTeam.pointsInPaint} points in the paint, {this.state.selectedGame.stats.hTeam.secondChancePoints} second-chance points, {this.state.selectedGame.stats.hTeam.pointsOffTurnovers} points off turnovers.</h2>
          <h2>{this.state.awayTeam.nickname}: {this.state.selectedGame.stats.vTeam.fastBreakPoints} fast-break points, {this.state.selectedGame.stats.vTeam.pointsInPaint} points in the paint, {this.state.selectedGame.stats.vTeam.secondChancePoints} second-chance points, {this.state.selectedGame.stats.vTeam.pointsOffTurnovers} points off turnovers.</h2>
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
