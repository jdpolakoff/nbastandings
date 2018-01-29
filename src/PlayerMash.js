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
    this.state = {}
  }

  render() {
    var players = this.props.players.map(function(player){
      return (
        <Link to={`/playerprofile/${player.urlL}/${player.urlF}`}>
        <div className="masonryGrid card">
          <ReactImageFallback className="masonryPlayer" src={player.image} fallbackImage={blank} initialImage={loading} />
          <p>{player.firstName} {player.lastName}</p>
        </div>
        </Link>
      )
    })

    return (
        <div className="masonryContainer">
            {players}
        </div>
    );
  }
}

export default PlayerMash;
