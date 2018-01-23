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


class TeamProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount(){
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
             var filteredArr = arr.filter(function(game){
               return game.stt === 'Final'
             })
           }
         }
       }
       console.log(filteredArr)
       this.setState({games: filteredArr})
    })

  }

  render() {

    var completedGames = this.state.games.map(function(game){
      return (
        <Link to={`/gameboxscore/${game.gdte.split('-').join('')}/${game.gid}`}>
        <div key={game.gdte.split('-').join('')}>
          <p>{game.v.tn} at {game.h.tn}</p>
        </div>
        </Link>
      )
    })

    return (
        <div>
          Team Profile
          {completedGames}
        </div>
    );
  }
}

export default TeamProfile;
