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
import axios from 'axios'
import blank from './images/blank.png'
import ReactImageFallback from "react-image-fallback"
import loading from './images/loading.gif'



class PlayerMash extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      teamSearch: ''
    }
  }

  updateSearch(event){
    this.setState({teamSearch: ''})
    this.setState({search: event.target.value}, function(){
      console.log(this.state.search)
    })
  }

  updateTeamSearch(event){
    this.setState({search: ''})
    this.setState({teamSearch: event.target.value}, function(){
      console.log(this.state.search)
    })
  }

  render() {
    var filteredPlayers = this.props.players.filter((player) => {
      return player.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })

    var filteredTeamPlayers = this.props.players.filter((player) => {
      if (player.team){
        return player.team.toLowerCase().indexOf(this.state.teamSearch.toLowerCase()) !== -1
      }
    })

    if (this.state.search !== ''){
      var players = filteredPlayers.map(function(player){
        return (
          <Link to={`/playerprofile/${player.urlL}/${player.urlF}`}>
          <div className="masonryGrid card">
          <ReactImageFallback className="masonryPlayer" src={player.image} fallbackImage={blank} initialImage={loading} />
          <p>{player.firstName} {player.lastName}<br/>{player.team}</p>
          </div>
          </Link>
        )
      })
    } else {
      var players = filteredTeamPlayers.map(function(player){
        return (
          <Link to={`/playerprofile/${player.urlL}/${player.urlF}`}>
          <div className="masonryGrid card">
          <ReactImageFallback className="masonryPlayer" src={player.image} fallbackImage={blank} initialImage={loading} />
          <p>{player.firstName} {player.lastName}<br/>{player.team}</p>
          </div>
          </Link>
        )
      })
    }

    return (
        <div className="masonryContainer">
        <div className="form">
        <label for="lastNameField">Search By Last Name</label>
          <input id="lastNameField" type="text" onChange={this.updateSearch.bind(this)} value={this.state.search} />
        <label for="teamField">Search By Team (e.g. Wizards)</label>
          <input id="teamField" type="text" onChange={this.updateTeamSearch.bind(this)} value={this.state.teamSearch} />
        </div>
            {players}
        </div>
    );
  }
}

export default PlayerMash;
