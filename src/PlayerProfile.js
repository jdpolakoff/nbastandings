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
import Home from './Home'
import typer from './typer-js/typer'
import Basket from './images/bask.png'
import axios from 'axios'
import ReactTable from 'react-table'
import { ReactTableDefaults } from 'react-table'

Object.assign(ReactTableDefaults, {
  showPagination: false,
  noDataText: 'Loading...'
})

class PlayerProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      player: {}
    }
  }

  componentDidMount(){
    var url = `https://nba-players.herokuapp.com/players-stats/${this.props.match.params.last}/${this.props.match.params.first}`
    axios.get(url)
      .then((response)=>{
        this.setState({player: response.data}, function(){
          console.log(this.state.player)
        })
      })
  }

  render() {
    if (!$.isEmptyObject(this.state.player)){
        const data = [this.state.player]
        const columns = [
        {
         columns: [
         {
           Header: 'Games Played',
           accessor: 'games_played',
         },
         {
          Header: 'Mins (Avg.)',
          accessor: 'minutes_per_game',
        },
        {
          Header: 'Points (Avg.)',
          accessor: 'points_per_game'
        },
        {
          Header: 'Rebounds (Avg.)',
          accessor: 'rebounds_per_game'
        },
        {
          Header: 'Assists (Avg.)',
          accessor: 'assists_per_game'
        }
        ]
       }
      ]

      const columns2 = [
      {
       columns: [
      {
        Header: 'Blocks (Avg.)',
        accessor: 'blocks_per_game'
      },
      {
        Header: 'Steals (Avg.)',
        accessor: 'steals_per_game'
      },
      {
        Header: '3-Pt%',
        accessor: 'three_point_percentage'
      },
      {
        Header: 'Free-Throw%',
        accessor: 'free_throw_percentage'
      },
      {
        Header: 'Turnovers (Avg.)',
        accessor: 'turnovers_per_game'
      }
      ]
     }
    ]

      return (
        <div className="playerProf">
          <div className="profileHeader">
            <img src={`https://nba-players.herokuapp.com/players/${this.props.match.params.last}/${this.props.match.params.first}`} />
            <h2>{this.state.player.name} 2017-2018 Stats</h2>
            <h3>{this.state.player.team_name}</h3>
            <ReactTable
              data={data}
              columns={columns}
              defaultPageSize={1}
              className="-striped -highlight"
            />
            <ReactTable
              data={data}
              columns={columns2}
              defaultPageSize={1}
              className="-striped -highlight"
            />
          </div>
        </div>
      )
    } else {
      return <div>loading...</div>
    }
  }
}

export default PlayerProfile;
