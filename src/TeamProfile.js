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
import Milligram from 'milligram'
import ReactDisqusComments from 'react-disqus-comments'


class TeamProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      games: [],
      homeTeam: '',
      awayTeam: '',
      pageUrl: ''
    }
  }

  componentDidMount(){
    this.setState({pageUrl: `localhost:3000/${this.props.match.params.teamName}`})
    console.log(this.props)
    const team1 = this.props.match.params.teamName
    var selectedTeam = this.props.teams.filter(function(team){
      return team.fullName === team1
    })
    var teamId = selectedTeam[0].teamId
    var url = `https://calm-dawn-83504.herokuapp.com/http://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2017/league/00_full_schedule.json`

    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    }).done((response) => {
      console.log(response)
      var arr = []
       for (var i = 0; i < response.lscd.length; i++) {
         for (var j = 0; j < response.lscd[i].mscd.g.length; j++){
           if (response.lscd[i].mscd.g[j].h.ta === selectedTeam[0].tricode || response.lscd[i].mscd.g[j].v.ta === selectedTeam[0].tricode) {
             arr.push(response.lscd[i].mscd.g[j])
             var filteredArr = arr.filter(function(game, index){
               if (index > 4) {
                 return game.stt === 'Final'
               }
             })
           }
         }
       }

       for (var z = 0; z < filteredArr.length; z++){
         for (var o = 0; o < this.props.teams.length; o++){
           if (filteredArr[z].h.ta === this.props.teams[o].tricode){
             filteredArr[z].h['img'] = this.props.teams[o].img
           }
           if (filteredArr[z].v.ta === this.props.teams[o].tricode){
             filteredArr[z].v['img'] = this.props.teams[o].img
           }
         }
       }

       console.log(filteredArr)
       filteredArr = filteredArr.reverse()

       this.setState({games: filteredArr})
    })
  }

  handleNewComment(comment) {
  console.log(comment.text);
  }

  render() {

    var completedGames = this.state.games.map(function(game){
      return (
        <Link to={`/gameboxscore/${game.gdte.split('-').join('')}/${game.gid}`}>
        <div className="column card" key={game.gdte.split('-').join('')}>
          <div className="thumbContain"><img className="thumbs" src={game.v.img} /><img className="thumbs" src={game.h.img} /></div>
          <p className="gameInfo">{game.v.tn} at {game.h.tn} {game.gdte.split('-')[1]}/{game.gdte.split('-')[2]}/{game.gdte.split('-')[0]}</p>
        </div>
        </Link>
      )
    })
    return (
      <div>
      <h1 className="team">{this.props.match.params.teamName} 2017-2018 games</h1>
      <div className="container">
        <div className="columns">
          {completedGames}
        </div>
      </div>
      <ReactDisqusComments
       shortname="smackboards"
       />
      </div>
    )
  }
}

export default TeamProfile;
