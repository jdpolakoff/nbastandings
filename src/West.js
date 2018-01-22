import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
import moment from 'moment'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { ReactTableDefaults } from 'react-table'

Object.assign(ReactTableDefaults, {
  showPagination: false
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
    var formattedDate = moment(date).format('YYYYMMDD')
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
   Header: props => <span>Western Conference Standings</span>,
   columns: [
   {
    Header: '',
    accessor: 'img',
    Cell: props => <img className="logo" src={props.value} />
   },
   {
     Header: 'Team',
     accessor: 'fullName',
     Cell: props => <span className='teamName'>{props.value}</span>
   },
   {
     Header: 'Wins',
     accessor: 'win'
   },
   {
     Header: 'Losses',
     accessor: 'loss'
   },
   {
     Header: 'Pct',
     accessor: 'winPct'
   },
   {
     Header: 'GB',
     accessor: 'gamesBehind'
   }
 ]
}
]

    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={15}
        />
      </div>
    );
  }
}

export default WesternConf;
