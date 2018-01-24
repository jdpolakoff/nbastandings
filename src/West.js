import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
import moment from 'moment'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { ReactTableDefaults } from 'react-table'
import MomentTimezone from 'moment-timezone'
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import ReactDisqusComments from 'react-disqus-comments'

Object.assign(ReactTableDefaults, {
  showPagination: false,
  noDataText: 'Loading...'
})

class WesternConf extends Component {
  constructor(){
    super()
    this.state = {
      teams: []
    }
  }

  componentDidMount(){
    var date = new Date()
    var formattedDate = moment(date).tz("America/Los_Angeles").format('YYYYMMDD')
    $.ajax({
        type: 'get',
        url: `https://calm-dawn-83504.herokuapp.com/http://data.nba.net/data/10s/prod/v1/${formattedDate}/standings_conference.json`,
        dataType: 'json'
    }).done((response) => {
        var westTeams = response.league.standard.conference.west
        var x
        var z
        for (x = 0; x < westTeams.length; x++){
          for (z = 0; z < this.props.teams.length; z++){
            if (westTeams[x].teamId === this.props.teams[z].teamId){
              westTeams[x]['fullName'] = this.props.teams[z].fullName
              westTeams[x]['img'] = this.props.teams[z].img
              westTeams[x]['rank'] = x + 1
            }
          }
        }

        this.setState({teams: westTeams}, function(){
          console.log(this.state.teams)
        })
  })
}

  render() {
  const data = this.state.teams

  const columns = [
  {
   Header: props => <span className="conf">Western Conference Standings</span>,
   columns: [
   {
     Header: '',
     accessor: 'rank',
     maxWidth: 30
   },
   {
    Header: '',
    accessor: 'img',
    Cell: props => <img className="logo" src={props.value} />,
    maxWidth: 70
   },
   {
     Header: '',
     accessor: 'fullName',
     Cell: props => <Link to={`/teamprofile/${props.value}`}><span className='teamName'>{props.value}</span></Link>,
     maxWidth: 200
   },
   {
     Header: 'Wins',
     accessor: 'win',
   },
   {
     Header: 'Losses',
     accessor: 'loss',
   },
   {
     Header: 'Win Pct',
     accessor: 'winPct',
   },
   {
     Header: 'GB',
     accessor: 'gamesBehind',
   }
 ]
}
]

    return (
      <div className="table">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={15}
          className="-striped -highlight"
        />
        <ReactDisqusComments
          shortname="nbasmack"
          title='Western Conference Standings'
          identifier='151'
          url='https://smackboards.herokuapp.com/westernconfstandings'
        />
      </div>
    );
  }
}

export default WesternConf;
