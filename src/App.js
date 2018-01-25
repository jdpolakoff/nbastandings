import React, { Component } from 'react';
import './App.css';
import EasternConf from './East.js'
import WesternConf from './West.js'
import blazers from './images/blazers.jpg'
import bucks from './images/bucks.jpg'
import bulls from './images/bulls.jpg'
import cavs from './images/cavs.jpg'
import celtics from './images/celtics.png'
import clippers from './images/clippers.jpg'
import grizzlies from './images/grizzlies.jpg'
import hawks from './images/hawks.jpg'
import heat from './images/heat.jpg'
import hornets from './images/hornets.jpg'
import jazz from './images/jazz.jpg'
import kings from './images/kings.jpg'
import knicks from './images/knicks.jpg'
import lakers from './images/lakers.jpg'
import magic from './images/magic.jpg'
import mavericks from './images/mavericks.jpg'
import nets from './images/nets.jpg'
import nuggets from './images/nuggets.jpg'
import pacers from './images/pacers.jpg'
import pelicans from './images/pelicans.png'
import pistons from './images/pistons.jpg'
import raptors from './images/raptors.jpg'
import rockets from './images/rockets.jpg'
import sixers from './images/sixers.jpg'
import spurs from './images/spurs.jpg'
import suns from './images/suns.jpg'
import thunder from './images/thunder.jpg'
import twolves from './images/twolves.jpg'
import warriors from './images/warriors.jpg'
import wizards from './images/wizards.jpg'
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import Home from './Home'
import TeamProfile from './TeamProfile'
import BoxScore from './BoxScore'
import Homepage from './Homepage'
import Favicon from 'react-favicon'

class App extends Component {
  constructor(){
    super()
    this.state = {
      teams: []
    }
  }

  componentWillMount(){
    var allTeams =
      [
        {
        "isNBAFranchise": true,
        "isAllStar": false,
        "city": "Atlanta",
        "altCityName": "Atlanta",
        "fullName": "Atlanta Hawks",
        "tricode": "ATL",
        "teamId": "1610612737",
        "img": hawks,
        "nickname": "Hawks",
        "urlName": "hawks",
        "confName": "East",
        "divName": "Southeast"
      },
      {
        "isNBAFranchise": true,
        "isAllStar": false,
        "city": "Boston",
        "altCityName": "Boston",
        "fullName": "Boston Celtics",
        "tricode": "BOS",
        "teamId": "1610612738",
        "img": celtics,
        "nickname": "Celtics",
        "urlName": "celtics",
        "confName": "East",
        "divName": "Atlantic"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Brooklyn",
      "altCityName": "Brooklyn",
      "fullName": "Brooklyn Nets",
      "tricode": "BKN",
      "teamId": "1610612751",
      "img": nets,
      "nickname": "Nets",
      "urlName": "nets",
      "confName": "East",
      "divName": "Atlantic"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Charlotte",
      "altCityName": "Charlotte",
      "fullName": "Charlotte Hornets",
      "tricode": "CHA",
      "teamId": "1610612766",
      "img": hornets,
      "nickname": "Hornets",
      "urlName": "hornets",
      "confName": "East",
      "divName": "Southeast"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Chicago",
      "altCityName": "Chicago",
      "fullName": "Chicago Bulls",
      "tricode": "CHI",
      "teamId": "1610612741",
      "img": bulls,
      "nickname": "Bulls",
      "urlName": "bulls",
      "confName": "East",
      "divName": "Central"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Cleveland",
      "altCityName": "Cleveland",
      "fullName": "Cleveland Cavaliers",
      "tricode": "CLE",
      "teamId": "1610612739",
      "img": cavs,
      "nickname": "Cavaliers",
      "urlName": "cavaliers",
      "confName": "East",
      "divName": "Central"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Dallas",
      "altCityName": "Dallas",
      "fullName": "Dallas Mavericks",
      "tricode": "DAL",
      "teamId": "1610612742",
      "img": mavericks,
      "nickname": "Mavericks",
      "urlName": "mavericks",
      "confName": "West",
      "divName": "Southwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Denver",
      "altCityName": "Denver",
      "fullName": "Denver Nuggets",
      "tricode": "DEN",
      "teamId": "1610612743",
      "img": nuggets,
      "nickname": "Nuggets",
      "urlName": "nuggets",
      "confName": "West",
      "divName": "Northwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Detroit",
      "altCityName": "Detroit",
      "fullName": "Detroit Pistons",
      "tricode": "DET",
      "teamId": "1610612765",
      "img": pistons,
      "nickname": "Pistons",
      "urlName": "pistons",
      "confName": "East",
      "divName": "Central"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Golden State",
      "altCityName": "Golden State",
      "fullName": "Golden State Warriors",
      "tricode": "GSW",
      "teamId": "1610612744",
      "img": warriors,
      "nickname": "Warriors",
      "urlName": "warriors",
      "confName": "West",
      "divName": "Pacific"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Houston",
      "altCityName": "Houston",
      "fullName": "Houston Rockets",
      "tricode": "HOU",
      "teamId": "1610612745",
      "img": rockets,
      "nickname": "Rockets",
      "urlName": "rockets",
      "confName": "West",
      "divName": "Southwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Indiana",
      "altCityName": "Indiana",
      "fullName": "Indiana Pacers",
      "tricode": "IND",
      "teamId": "1610612754",
      "img": pacers,
      "nickname": "Pacers",
      "urlName": "pacers",
      "confName": "East",
      "divName": "Central"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "LA",
      "altCityName": "LA Clippers",
      "fullName": "LA Clippers",
      "tricode": "LAC",
      "teamId": "1610612746",
      "img": clippers,
      "nickname": "Clippers",
      "urlName": "clippers",
      "confName": "West",
      "divName": "Pacific"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Los Angeles",
      "altCityName": "Los Angeles Lakers",
      "fullName": "Los Angeles Lakers",
      "tricode": "LAL",
      "teamId": "1610612747",
      "img": lakers,
      "nickname": "Lakers",
      "urlName": "lakers",
      "confName": "West",
      "divName": "Pacific"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Memphis",
      "altCityName": "Memphis",
      "fullName": "Memphis Grizzlies",
      "tricode": "MEM",
      "teamId": "1610612763",
      "img": grizzlies,
      "nickname": "Grizzlies",
      "urlName": "grizzlies",
      "confName": "West",
      "divName": "Southwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Miami",
      "altCityName": "Miami",
      "fullName": "Miami Heat",
      "tricode": "MIA",
      "teamId": "1610612748",
      "img": heat,
      "nickname": "Heat",
      "urlName": "heat",
      "confName": "East",
      "divName": "Southeast"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Milwaukee",
      "altCityName": "Milwaukee",
      "fullName": "Milwaukee Bucks",
      "tricode": "MIL",
      "teamId": "1610612749",
      "img": bucks,
      "nickname": "Bucks",
      "urlName": "bucks",
      "confName": "East",
      "divName": "Central"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Minnesota",
      "altCityName": "Minnesota",
      "fullName": "Minnesota Timberwolves",
      "tricode": "MIN",
      "teamId": "1610612750",
      "img": twolves,
      "nickname": "Timberwolves",
      "urlName": "timberwolves",
      "confName": "West",
      "divName": "Northwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "New Orleans",
      "altCityName": "New Orleans",
      "fullName": "New Orleans Pelicans",
      "tricode": "NOP",
      "teamId": "1610612740",
      "img": pelicans,
      "nickname": "Pelicans",
      "urlName": "pelicans",
      "confName": "West",
      "divName": "Southwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "New York",
      "altCityName": "New York",
      "fullName": "New York Knicks",
      "tricode": "NYK",
      "teamId": "1610612752",
      "img": knicks,
      "nickname": "Knicks",
      "urlName": "knicks",
      "confName": "East",
      "divName": "Atlantic"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Oklahoma City",
      "altCityName": "Oklahoma City",
      "fullName": "Oklahoma City Thunder",
      "tricode": "OKC",
      "teamId": "1610612760",
      "img": thunder,
      "nickname": "Thunder",
      "urlName": "thunder",
      "confName": "West",
      "divName": "Northwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Orlando",
      "altCityName": "Orlando",
      "fullName": "Orlando Magic",
      "tricode": "ORL",
      "teamId": "1610612753",
      "img": magic,
      "nickname": "Magic",
      "urlName": "magic",
      "confName": "East",
      "divName": "Southeast"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Philadelphia",
      "altCityName": "Philadelphia",
      "fullName": "Philadelphia 76ers",
      "tricode": "PHI",
      "teamId": "1610612755",
      "img": sixers,
      "nickname": "76ers",
      "urlName": "sixers",
      "confName": "East",
      "divName": "Atlantic"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Phoenix",
      "altCityName": "Phoenix",
      "fullName": "Phoenix Suns",
      "tricode": "PHX",
      "teamId": "1610612756",
      "img": suns,
      "nickname": "Suns",
      "urlName": "suns",
      "confName": "West",
      "divName": "Pacific"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Portland",
      "altCityName": "Portland",
      "fullName": "Portland Trail Blazers",
      "tricode": "POR",
      "teamId": "1610612757",
      "img": blazers,
      "nickname": "Trail Blazers",
      "urlName": "blazers",
      "confName": "West",
      "divName": "Northwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Sacramento",
      "altCityName": "Sacramento",
      "fullName": "Sacramento Kings",
      "tricode": "SAC",
      "teamId": "1610612758",
      "img": kings,
      "nickname": "Kings",
      "urlName": "kings",
      "confName": "West",
      "divName": "Pacific"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "San Antonio",
      "altCityName": "San Antonio",
      "fullName": "San Antonio Spurs",
      "tricode": "SAS",
      "teamId": "1610612759",
      "img": spurs,
      "nickname": "Spurs",
      "urlName": "spurs",
      "confName": "West",
      "divName": "Southwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Toronto",
      "altCityName": "Toronto",
      "fullName": "Toronto Raptors",
      "tricode": "TOR",
      "teamId": "1610612761",
      "img": raptors,
      "nickname": "Raptors",
      "urlName": "raptors",
      "confName": "East",
      "divName": "Atlantic"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Utah",
      "altCityName": "Utah",
      "fullName": "Utah Jazz",
      "tricode": "UTA",
      "teamId": "1610612762",
      "img": jazz,
      "nickname": "Jazz",
      "urlName": "jazz",
      "confName": "West",
      "divName": "Northwest"
      },
      {
      "isNBAFranchise": true,
      "isAllStar": false,
      "city": "Washington",
      "altCityName": "Washington",
      "fullName": "Washington Wizards",
      "tricode": "WAS",
      "teamId": "1610612764",
      "img": wizards,
      "nickname": "Wizards",
      "urlName": "wizards",
      "confName": "East",
      "divName": "Southeast"
    }
  ]
    this.setState({teams: allTeams}, function(){
      console.log(this.state.teams)
    })
  }

  render() {

    return (
        <div>
        <Favicon url="./images/favicon.ico" />
          <Switch>
            <Route exact path='/'
            render={(props) => {
              return (
                <div>
                  <Homepage teams={this.state.teams}/>
                </div>
              )
            }}
            />
            <Route exact path='/easternconfstandings'
            render={(props) => {
              return (
                <div>
                <Home {...props} teams={this.state.teams} />
                <EasternConf teams={this.state.teams} />
                </div>
              )
            }}
            />
            <Route exact path='/westernconfstandings'
            render={(props) => {
              return (
                <div>
                <Home {...props} teams={this.state.teams} />
                <WesternConf teams={this.state.teams} />
                </div>
              )
            }}
            />
            <Route path='/teamprofile/:teamName'
            render={(props) => {
              return (
                <div>
                <Home {...props} teams={this.state.teams} />
                <TeamProfile {...props} teams={this.state.teams}/>
                </div>
              )
            }}
            />
            <Route path='/gameboxscore/:date/:gid'
            render={(props) => {
              return (
                <div>
                <Home {...props} teams={this.state.teams} />
                <BoxScore {...props} teams={this.state.teams}/>
                </div>
              )
            }}
            />
          </Switch>
        </div>
    );
  }
}

export default App;
