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
import blank from './images/blank.png'
import $ from 'jquery'

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
import PlayerProfile from './PlayerProfile'
import PlayerMash from './PlayerMash'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      teams: [],
      players: [],
      hasPic: true
    }
  }


  componentDidMount(){

    var allPlayers =
[
  {
    "firstName": "Alex",
    "lastName": "Abrines",
    "playerId": 203518,
    "teamId": 1610612760
  },
  {
    "firstName": "Quincy",
    "lastName": "Acy",
    "playerId": 203112,
    "teamId": 1610612751
  },
  {
    "firstName": "Steven",
    "lastName": "Adams",
    "playerId": 203500,
    "teamId": 1610612760
  },
  {
    "firstName": "Bam",
    "lastName": "Adebayo",
    "playerId": 1628389,
    "teamId": 1610612748
  },
  {
    "firstName": "Arron",
    "lastName": "Afflalo",
    "playerId": 201167,
    "teamId": 1610612753
  },
  {
    "firstName": "Alexis",
    "lastName": "Ajinca",
    "playerId": 201582,
    "teamId": 1610612740
  },
  {
    "firstName": "Cole",
    "lastName": "Aldrich",
    "playerId": 202332,
    "teamId": 1610612750
  },
  {
    "firstName": "LaMarcus",
    "lastName": "Aldridge",
    "playerId": 200746,
    "teamId": 1610612759
  },
  {
    "firstName": "Jarrett",
    "lastName": "Allen",
    "playerId": 1628386,
    "teamId": 1610612751
  },
  {
    "firstName": "Kadeem",
    "lastName": "Allen",
    "playerId": 1628443,
    "teamId": 1610612738
  },
  {
    "firstName": "Tony",
    "lastName": "Allen",
    "playerId": 2754,
    "teamId": 1610612740
  },
  {
    "firstName": "Al-Farouq",
    "lastName": "Aminu",
    "playerId": 202329,
    "teamId": 1610612757
  },
  {
    "firstName": "Justin",
    "lastName": "Anderson",
    "playerId": 1626147,
    "teamId": 1610612755
  },
  {
    "firstName": "Kyle",
    "lastName": "Anderson",
    "playerId": 203937,
    "teamId": 1610612759
  },
  {
    "firstName": "Ryan",
    "lastName": "Anderson",
    "playerId": 201583,
    "teamId": 1610612745
  },
  {
    "firstName": "Ike",
    "lastName": "Anigbogu",
    "playerId": 1628387,
    "teamId": 1610612754
  },
  {
    "firstName": "Giannis",
    "lastName": "Antetokounmpo",
    "playerId": 203507,
    "teamId": 1610612749
  },
  {
    "firstName": "Carmelo",
    "lastName": "Anthony",
    "playerId": 2546,
    "teamId": 1610612760
  },
  {
    "firstName": "OG",
    "lastName": "Anunoby",
    "playerId": 1628384,
    "teamId": 1610612761
  },
  {
    "firstName": "Ryan",
    "lastName": "Arcidiacono",
    "playerId": 1627853,
    "teamId": 1610612741
  },
  {
    "firstName": "Trevor",
    "lastName": "Ariza",
    "playerId": 2772,
    "teamId": 1610612745
  },
  {
    "firstName": "Darrell",
    "lastName": "Arthur",
    "playerId": 201589,
    "teamId": 1610612743
  },
  {
    "firstName": "Jamel",
    "lastName": "Artis",
    "playerId": 1628503,
    "teamId": 1610612753
  },
  {
    "firstName": "Omer",
    "lastName": "Asik",
    "playerId": 201600,
    "teamId": 1610612740
  },
  {
    "firstName": "D.J.",
    "lastName": "Augustin",
    "playerId": 201571,
    "teamId": 1610612753
  },
  {
    "firstName": "Luke",
    "lastName": "Babbitt",
    "playerId": 202337,
    "teamId": 1610612737
  },
  {
    "firstName": "Dwayne",
    "lastName": "Bacon",
    "playerId": 1628407,
    "teamId": 1610612766
  },
  {
    "firstName": "Ron",
    "lastName": "Baker",
    "playerId": 1627758,
    "teamId": 1610612752
  },
  {
    "firstName": "Wade",
    "lastName": "Baldwin IV",
    "playerId": 1627735,
    "teamId": 1610612757
  },
  {
    "firstName": "Lonzo",
    "lastName": "Ball",
    "playerId": 1628366,
    "teamId": 1610612747
  },
  {
    "firstName": "J.J.",
    "lastName": "Barea",
    "playerId": 200826,
    "teamId": 1610612742
  },
  {
    "firstName": "Harrison",
    "lastName": "Barnes",
    "playerId": 203084,
    "teamId": 1610612742
  },
  {
    "firstName": "Will",
    "lastName": "Barton",
    "playerId": 203115,
    "teamId": 1610612743
  },
  {
    "firstName": "Nicolas",
    "lastName": "Batum",
    "playerId": 201587,
    "teamId": 1610612766
  },
  {
    "firstName": "Jerryd",
    "lastName": "Bayless",
    "playerId": 201573,
    "teamId": 1610612755
  },
  {
    "firstName": "Aron",
    "lastName": "Baynes",
    "playerId": 203382,
    "teamId": 1610612738
  },
  {
    "firstName": "Kent",
    "lastName": "Bazemore",
    "playerId": 203145,
    "teamId": 1610612737
  },
  {
    "firstName": "Bradley",
    "lastName": "Beal",
    "playerId": 203078,
    "teamId": 1610612764
  },
  {
    "firstName": "Malik",
    "lastName": "Beasley",
    "playerId": 1627736,
    "teamId": 1610612743
  },
  {
    "firstName": "Michael",
    "lastName": "Beasley",
    "playerId": 201563,
    "teamId": 1610612752
  },
  {
    "firstName": "Marco",
    "lastName": "Belinelli",
    "playerId": 201158,
    "teamId": 1610612737
  },
  {
    "firstName": "Jordan",
    "lastName": "Bell",
    "playerId": 1628395,
    "teamId": 1610612744
  },
  {
    "firstName": "DeAndre'",
    "lastName": "Bembry",
    "playerId": 1627761,
    "teamId": 1610612737
  },
  {
    "firstName": "Dragan",
    "lastName": "Bender",
    "playerId": 1627733,
    "teamId": 1610612756
  },
  {
    "firstName": "Davis",
    "lastName": "Bertans",
    "playerId": 202722,
    "teamId": 1610612759
  },
  {
    "firstName": "Patrick",
    "lastName": "Beverley",
    "playerId": 201976,
    "teamId": 1610612746
  },
  {
    "firstName": "Khem",
    "lastName": "Birch",
    "playerId": 203920,
    "teamId": 1610612753
  },
  {
    "firstName": "Jabari",
    "lastName": "Bird",
    "playerId": 1628444,
    "teamId": 1610612738
  },
  {
    "firstName": "Bismack",
    "lastName": "Biyombo",
    "playerId": 202687,
    "teamId": 1610612753
  },
  {
    "firstName": "Nemanja",
    "lastName": "Bjelica",
    "playerId": 202357,
    "teamId": 1610612750
  },
  {
    "firstName": "Tarik",
    "lastName": "Black",
    "playerId": 204028,
    "teamId": 1610612745
  },
  {
    "firstName": "Antonio",
    "lastName": "Blakeney",
    "playerId": 1628469,
    "teamId": 1610612741
  },
  {
    "firstName": "Eric",
    "lastName": "Bledsoe",
    "playerId": 202339,
    "teamId": 1610612756
  },
  {
    "firstName": "Vander",
    "lastName": "Blue",
    "playerId": 203505,
    "teamId": 1610612747
  },
  {
    "firstName": "Bogdan",
    "lastName": "Bogdanovic",
    "playerId": 203992,
    "teamId": 1610612758
  },
  {
    "firstName": "Bojan",
    "lastName": "Bogdanovic",
    "playerId": 202711,
    "teamId": 1610612754
  },
  {
    "firstName": "Andrew",
    "lastName": "Bogut",
    "playerId": 101106,
    "teamId": 1610612747
  },
  {
    "firstName": "Joel",
    "lastName": "Bolomboy",
    "playerId": 1627762,
    "teamId": 1610612749
  },
  {
    "firstName": "Devin",
    "lastName": "Booker",
    "playerId": 1626164,
    "teamId": 1610612756
  },
  {
    "firstName": "Trevor",
    "lastName": "Booker",
    "playerId": 202344,
    "teamId": 1610612751
  },
  {
    "firstName": "Chris",
    "lastName": "Boucher",
    "playerId": 1628449,
    "teamId": 1610612744
  },
  {
    "firstName": "Avery",
    "lastName": "Bradley",
    "playerId": 202340,
    "teamId": 1610612765
  },
  {
    "firstName": "Tony",
    "lastName": "Bradley",
    "playerId": 1628396,
    "teamId": 1610612762
  },
  {
    "firstName": "Corey",
    "lastName": "Brewer",
    "playerId": 201147,
    "teamId": 1610612747
  },
  {
    "firstName": "Malcolm",
    "lastName": "Brogdon",
    "playerId": 1627763,
    "teamId": 1610612749
  },
  {
    "firstName": "Aaron",
    "lastName": "Brooks",
    "playerId": 201166,
    "teamId": 1610612750
  },
  {
    "firstName": "Dillon",
    "lastName": "Brooks",
    "playerId": 1628415,
    "teamId": 1610612763
  },
  {
    "firstName": "Anthony",
    "lastName": "Brown",
    "playerId": 1626148,
    "teamId": 1610612750
  },
  {
    "firstName": "Bobby",
    "lastName": "Brown",
    "playerId": 201628,
    "teamId": 1610612745
  },
  {
    "firstName": "Jaylen",
    "lastName": "Brown",
    "playerId": 1627759,
    "teamId": 1610612738
  },
  {
    "firstName": "Lorenzo",
    "lastName": "Brown",
    "playerId": 203485,
    "teamId": 1610612761
  },
  {
    "firstName": "Sterling",
    "lastName": "Brown",
    "playerId": 1628425,
    "teamId": 1610612749
  },
  {
    "firstName": "Nicolas",
    "lastName": "Brussino",
    "playerId": 1627852,
    "teamId": 1610612737
  },
  {
    "firstName": "Thomas",
    "lastName": "Bryant",
    "playerId": 1628418,
    "teamId": 1610612747
  },
  {
    "firstName": "Reggie",
    "lastName": "Bullock",
    "playerId": 203493,
    "teamId": 1610612765
  },
  {
    "firstName": "Alec",
    "lastName": "Burks",
    "playerId": 202692,
    "teamId": 1610612762
  },
  {
    "firstName": "Jimmy",
    "lastName": "Butler",
    "playerId": 202710,
    "teamId": 1610612750
  },
  {
    "firstName": "Dwight",
    "lastName": "Buycks",
    "playerId": 202779,
    "teamId": 1610612765
  },
  {
    "firstName": "Bruno",
    "lastName": "Caboclo",
    "playerId": 203998,
    "teamId": 1610612761
  },
  {
    "firstName": "Jose",
    "lastName": "Calderon",
    "playerId": 101181,
    "teamId": 1610612739
  },
  {
    "firstName": "Kentavious",
    "lastName": "Caldwell-Pope",
    "playerId": 203484,
    "teamId": 1610612747
  },
  {
    "firstName": "Clint",
    "lastName": "Capela",
    "playerId": 203991,
    "teamId": 1610612745
  },
  {
    "firstName": "DeMarre",
    "lastName": "Carroll",
    "playerId": 201960,
    "teamId": 1610612751
  },
  {
    "firstName": "Vince",
    "lastName": "Carter",
    "playerId": 1713,
    "teamId": 1610612758
  },
  {
    "firstName": "Michael",
    "lastName": "Carter-Williams",
    "playerId": 203487,
    "teamId": 1610612766
  },
  {
    "firstName": "Alex",
    "lastName": "Caruso",
    "playerId": 1627936,
    "teamId": 1610612747
  },
  {
    "firstName": "Omri",
    "lastName": "Casspi",
    "playerId": 201956,
    "teamId": 1610612744
  },
  {
    "firstName": "Willie",
    "lastName": "Cauley-Stein",
    "playerId": 1626161,
    "teamId": 1610612758
  },
  {
    "firstName": "Mario",
    "lastName": "Chalmers",
    "playerId": 201596,
    "teamId": 1610612763
  },
  {
    "firstName": "Tyson",
    "lastName": "Chandler",
    "playerId": 2199,
    "teamId": 1610612756
  },
  {
    "firstName": "Wilson",
    "lastName": "Chandler",
    "playerId": 201163,
    "teamId": 1610612743
  },
  {
    "firstName": "Marquese",
    "lastName": "Chriss",
    "playerId": 1627737,
    "teamId": 1610612756
  },
  {
    "firstName": "Ian",
    "lastName": "Clark",
    "playerId": 203546,
    "teamId": 1610612740
  },
  {
    "firstName": "Jordan",
    "lastName": "Clarkson",
    "playerId": 203903,
    "teamId": 1610612747
  },
  {
    "firstName": "Gian",
    "lastName": "Clavell",
    "playerId": 1628492,
    "teamId": 1610612742
  },
  {
    "firstName": "John",
    "lastName": "Collins",
    "playerId": 1628381,
    "teamId": 1610612737
  },
  {
    "firstName": "Zach",
    "lastName": "Collins",
    "playerId": 1628380,
    "teamId": 1610612757
  },
  {
    "firstName": "Darren",
    "lastName": "Collison",
    "playerId": 201954,
    "teamId": 1610612754
  },
  {
    "firstName": "Nick",
    "lastName": "Collison",
    "playerId": 2555,
    "teamId": 1610612760
  },
  {
    "firstName": "Mike",
    "lastName": "Conley",
    "playerId": 201144,
    "teamId": 1610612763
  },
  {
    "firstName": "Pat",
    "lastName": "Connaughton",
    "playerId": 1626192,
    "teamId": 1610612757
  },
  {
    "firstName": "Quinn",
    "lastName": "Cook",
    "playerId": 1626188,
    "teamId": 1610612744
  },
  {
    "firstName": "Charles",
    "lastName": "Cooke",
    "playerId": 1628429,
    "teamId": 1610612740
  },
  {
    "firstName": "Jack",
    "lastName": "Cooley",
    "playerId": 204022,
    "teamId": 1610612758
  },
  {
    "firstName": "Matt",
    "lastName": "Costello",
    "playerId": 1627856,
    "teamId": 1610612759
  },
  {
    "firstName": "DeMarcus",
    "lastName": "Cousins",
    "playerId": 202326,
    "teamId": 1610612740
  },
  {
    "firstName": "Robert",
    "lastName": "Covington",
    "playerId": 203496,
    "teamId": 1610612755
  },
  {
    "firstName": "Allen",
    "lastName": "Crabbe",
    "playerId": 203459,
    "teamId": 1610612751
  },
  {
    "firstName": "Torrey",
    "lastName": "Craig",
    "playerId": 1628470,
    "teamId": 1610612743
  },
  {
    "firstName": "Jamal",
    "lastName": "Crawford",
    "playerId": 2037,
    "teamId": 1610612750
  },
  {
    "firstName": "Jordan",
    "lastName": "Crawford",
    "playerId": 202348,
    "teamId": 0
  },
  {
    "firstName": "Jae",
    "lastName": "Crowder",
    "playerId": 203109,
    "teamId": 1610612739
  },
  {
    "firstName": "Dante",
    "lastName": "Cunningham",
    "playerId": 201967,
    "teamId": 1610612740
  },
  {
    "firstName": "Seth",
    "lastName": "Curry",
    "playerId": 203552,
    "teamId": 1610612742
  },
  {
    "firstName": "Stephen",
    "lastName": "Curry",
    "playerId": 201939,
    "teamId": 1610612744
  },
  {
    "firstName": "Troy",
    "lastName": "Daniels",
    "playerId": 203584,
    "teamId": 1610612756
  },
  {
    "firstName": "Anthony",
    "lastName": "Davis",
    "playerId": 203076,
    "teamId": 1610612740
  },
  {
    "firstName": "Deyonta",
    "lastName": "Davis",
    "playerId": 1627738,
    "teamId": 1610612763
  },
  {
    "firstName": "Ed",
    "lastName": "Davis",
    "playerId": 202334,
    "teamId": 1610612757
  },
  {
    "firstName": "DeMar",
    "lastName": "DeRozan",
    "playerId": 201942,
    "teamId": 1610612761
  },
  {
    "firstName": "Dewayne",
    "lastName": "Dedmon",
    "playerId": 203473,
    "teamId": 1610612737
  },
  {
    "firstName": "Sam",
    "lastName": "Dekker",
    "playerId": 1626155,
    "teamId": 1610612746
  },
  {
    "firstName": "Malcolm",
    "lastName": "Delaney",
    "playerId": 1627098,
    "teamId": 1610612737
  },
  {
    "firstName": "Matthew",
    "lastName": "Dellavedova",
    "playerId": 203521,
    "teamId": 1610612749
  },
  {
    "firstName": "Luol",
    "lastName": "Deng",
    "playerId": 2736,
    "teamId": 1610612747
  },
  {
    "firstName": "Cheick",
    "lastName": "Diallo",
    "playerId": 1627767,
    "teamId": 1610612740
  },
  {
    "firstName": "Gorgui",
    "lastName": "Dieng",
    "playerId": 203476,
    "teamId": 1610612750
  },
  {
    "firstName": "Spencer",
    "lastName": "Dinwiddie",
    "playerId": 203915,
    "teamId": 1610612751
  },
  {
    "firstName": "Tyler",
    "lastName": "Dorsey",
    "playerId": 1628416,
    "teamId": 1610612737
  },
  {
    "firstName": "Damyean",
    "lastName": "Dotson",
    "playerId": 1628422,
    "teamId": 1610612752
  },
  {
    "firstName": "PJ",
    "lastName": "Dozier",
    "playerId": 1628408,
    "teamId": 1610612760
  },
  {
    "firstName": "Goran",
    "lastName": "Dragic",
    "playerId": 201609,
    "teamId": 1610612748
  },
  {
    "firstName": "Andre",
    "lastName": "Drummond",
    "playerId": 203083,
    "teamId": 1610612765
  },
  {
    "firstName": "Jared",
    "lastName": "Dudley",
    "playerId": 201162,
    "teamId": 1610612756
  },
  {
    "firstName": "Kris",
    "lastName": "Dunn",
    "playerId": 1627739,
    "teamId": 1610612741
  },
  {
    "firstName": "Kevin",
    "lastName": "Durant",
    "playerId": 201142,
    "teamId": 1610612744
  },
  {
    "firstName": "Henry",
    "lastName": "Ellenson",
    "playerId": 1627740,
    "teamId": 1610612765
  },
  {
    "firstName": "Wayne",
    "lastName": "Ellington",
    "playerId": 201961,
    "teamId": 1610612748
  },
  {
    "firstName": "Joel",
    "lastName": "Embiid",
    "playerId": 203954,
    "teamId": 1610612755
  },
  {
    "firstName": "Tyler",
    "lastName": "Ennis",
    "playerId": 203898,
    "teamId": 1610612747
  },
  {
    "firstName": "James",
    "lastName": "Ennis III",
    "playerId": 203516,
    "teamId": 1610612763
  },
  {
    "firstName": "Jawun",
    "lastName": "Evans",
    "playerId": 1628393,
    "teamId": 1610612746
  },
  {
    "firstName": "Tyreke",
    "lastName": "Evans",
    "playerId": 201936,
    "teamId": 1610612763
  },
  {
    "firstName": "Dante",
    "lastName": "Exum",
    "playerId": 203957,
    "teamId": 1610612762
  },
  {
    "firstName": "Kenneth",
    "lastName": "Faried",
    "playerId": 202702,
    "teamId": 1610612743
  },
  {
    "firstName": "Derrick",
    "lastName": "Favors",
    "playerId": 202324,
    "teamId": 1610612762
  },
  {
    "firstName": "Kay",
    "lastName": "Felder",
    "playerId": 1627770,
    "teamId": 1610612741
  },
  {
    "firstName": "Cristiano",
    "lastName": "Felicio",
    "playerId": 1626245,
    "teamId": 1610612741
  },
  {
    "firstName": "Carrick",
    "lastName": "Felix",
    "playerId": 203467,
    "teamId": 1610612764
  },
  {
    "firstName": "Raymond",
    "lastName": "Felton",
    "playerId": 101109,
    "teamId": 1610612760
  },
  {
    "firstName": "Terrance",
    "lastName": "Ferguson",
    "playerId": 1628390,
    "teamId": 1610612760
  },
  {
    "firstName": "Yogi",
    "lastName": "Ferrell",
    "playerId": 1627812,
    "teamId": 1610612742
  },
  {
    "firstName": "Dorian",
    "lastName": "Finney-Smith",
    "playerId": 1627827,
    "teamId": 1610612742
  },
  {
    "firstName": "Bryn",
    "lastName": "Forbes",
    "playerId": 1627854,
    "teamId": 1610612759
  },
  {
    "firstName": "Evan",
    "lastName": "Fournier",
    "playerId": 203095,
    "teamId": 1610612753
  },
  {
    "firstName": "De'Aaron",
    "lastName": "Fox",
    "playerId": 1628368,
    "teamId": 1610612758
  },
  {
    "firstName": "Tim",
    "lastName": "Frazier",
    "playerId": 204025,
    "teamId": 1610612764
  },
  {
    "firstName": "Channing",
    "lastName": "Frye",
    "playerId": 101112,
    "teamId": 1610612739
  },
  {
    "firstName": "Markelle",
    "lastName": "Fultz",
    "playerId": 1628365,
    "teamId": 1610612755
  },
  {
    "firstName": "Danilo",
    "lastName": "Gallinari",
    "playerId": 201568,
    "teamId": 1610612746
  },
  {
    "firstName": "Langston",
    "lastName": "Galloway",
    "playerId": 204038,
    "teamId": 1610612765
  },
  {
    "firstName": "Marc",
    "lastName": "Gasol",
    "playerId": 201188,
    "teamId": 1610612763
  },
  {
    "firstName": "Pau",
    "lastName": "Gasol",
    "playerId": 2200,
    "teamId": 1610612759
  },
  {
    "firstName": "Rudy",
    "lastName": "Gay",
    "playerId": 200752,
    "teamId": 1610612759
  },
  {
    "firstName": "Paul",
    "lastName": "George",
    "playerId": 202331,
    "teamId": 1610612760
  },
  {
    "firstName": "Marcus",
    "lastName": "Georges-Hunt",
    "playerId": 1627875,
    "teamId": 1610612750
  },
  {
    "firstName": "Taj",
    "lastName": "Gibson",
    "playerId": 201959,
    "teamId": 1610612750
  },
  {
    "firstName": "Harry",
    "lastName": "Giles",
    "playerId": 1628385,
    "teamId": 1610612758
  },
  {
    "firstName": "Manu",
    "lastName": "Ginobili",
    "playerId": 1938,
    "teamId": 1610612759
  },
  {
    "firstName": "Rudy",
    "lastName": "Gobert",
    "playerId": 203497,
    "teamId": 1610612762
  },
  {
    "firstName": "Aaron",
    "lastName": "Gordon",
    "playerId": 203932,
    "teamId": 1610612753
  },
  {
    "firstName": "Eric",
    "lastName": "Gordon",
    "playerId": 201569,
    "teamId": 1610612745
  },
  {
    "firstName": "Marcin",
    "lastName": "Gortat",
    "playerId": 101162,
    "teamId": 1610612764
  },
  {
    "firstName": "Treveon",
    "lastName": "Graham",
    "playerId": 1626203,
    "teamId": 1610612766
  },
  {
    "firstName": "Jerami",
    "lastName": "Grant",
    "playerId": 203924,
    "teamId": 1610612760
  },
  {
    "firstName": "Jerian",
    "lastName": "Grant",
    "playerId": 1626170,
    "teamId": 1610612741
  },
  {
    "firstName": "Danny",
    "lastName": "Green",
    "playerId": 201980,
    "teamId": 1610612759
  },
  {
    "firstName": "Draymond",
    "lastName": "Green",
    "playerId": 203110,
    "teamId": 1610612744
  },
  {
    "firstName": "JaMychal",
    "lastName": "Green",
    "playerId": 203210,
    "teamId": 1610612763
  },
  {
    "firstName": "Jeff",
    "lastName": "Green",
    "playerId": 201145,
    "teamId": 1610612739
  },
  {
    "firstName": "Blake",
    "lastName": "Griffin",
    "playerId": 201933,
    "teamId": 1610612746
  },
  {
    "firstName": "Eric",
    "lastName": "Griffin",
    "playerId": 203547,
    "teamId": 1610612762
  },
  {
    "firstName": "Daniel",
    "lastName": "Hamilton",
    "playerId": 1627772,
    "teamId": 1610612760
  },
  {
    "firstName": "AJ",
    "lastName": "Hammons",
    "playerId": 1627773,
    "teamId": 1610612748
  },
  {
    "firstName": "Tim",
    "lastName": "Hardaway Jr.",
    "playerId": 203501,
    "teamId": 1610612752
  },
  {
    "firstName": "James",
    "lastName": "Harden",
    "playerId": 201935,
    "teamId": 1610612745
  },
  {
    "firstName": "Maurice",
    "lastName": "Harkless",
    "playerId": 203090,
    "teamId": 1610612757
  },
  {
    "firstName": "Montrezl",
    "lastName": "Harrell",
    "playerId": 1626149,
    "teamId": 1610612746
  },
  {
    "firstName": "Devin",
    "lastName": "Harris",
    "playerId": 2734,
    "teamId": 1610612742
  },
  {
    "firstName": "Gary",
    "lastName": "Harris",
    "playerId": 203914,
    "teamId": 1610612743
  },
  {
    "firstName": "Joe",
    "lastName": "Harris",
    "playerId": 203925,
    "teamId": 1610612751
  },
  {
    "firstName": "Tobias",
    "lastName": "Harris",
    "playerId": 202699,
    "teamId": 1610612765
  },
  {
    "firstName": "Andrew",
    "lastName": "Harrison",
    "playerId": 1626150,
    "teamId": 1610612763
  },
  {
    "firstName": "Josh",
    "lastName": "Hart",
    "playerId": 1628404,
    "teamId": 1610612747
  },
  {
    "firstName": "Udonis",
    "lastName": "Haslem",
    "playerId": 2617,
    "teamId": 1610612748
  },
  {
    "firstName": "Gordon",
    "lastName": "Hayward",
    "playerId": 202330,
    "teamId": 1610612738
  },
  {
    "firstName": "John",
    "lastName": "Henson",
    "playerId": 203089,
    "teamId": 1610612749
  },
  {
    "firstName": "Juan",
    "lastName": "Hernangomez",
    "playerId": 1627823,
    "teamId": 1610612743
  },
  {
    "firstName": "Willy",
    "lastName": "Hernangomez",
    "playerId": 1626195,
    "teamId": 1610612752
  },
  {
    "firstName": "Mario",
    "lastName": "Hezonja",
    "playerId": 1626209,
    "teamId": 1610612753
  },
  {
    "firstName": "Isaiah",
    "lastName": "Hicks",
    "playerId": 1628439,
    "teamId": 1610612752
  },
  {
    "firstName": "Buddy",
    "lastName": "Hield",
    "playerId": 1627741,
    "teamId": 1610612758
  },
  {
    "firstName": "Nene",
    "lastName": "",
    "playerId": 2403,
    "teamId": 1610612745
  },
  {
    "firstName": "George",
    "lastName": "Hill",
    "playerId": 201588,
    "teamId": 1610612758
  },
  {
    "firstName": "Solomon",
    "lastName": "Hill",
    "playerId": 203524,
    "teamId": 1610612740
  },
  {
    "firstName": "Darrun",
    "lastName": "Hilliard",
    "playerId": 1626199,
    "teamId": 1610612759
  },
  {
    "firstName": "Jrue",
    "lastName": "Holiday",
    "playerId": 201950,
    "teamId": 1610612740
  },
  {
    "firstName": "Justin",
    "lastName": "Holiday",
    "playerId": 203200,
    "teamId": 1610612741
  },
  {
    "firstName": "John",
    "lastName": "Holland",
    "playerId": 204066,
    "teamId": 1610612739
  },
  {
    "firstName": "Rondae",
    "lastName": "Hollis-Jefferson",
    "playerId": 1626178,
    "teamId": 1610612751
  },
  {
    "firstName": "Richaun",
    "lastName": "Holmes",
    "playerId": 1626158,
    "teamId": 1610612755
  },
  {
    "firstName": "Rodney",
    "lastName": "Hood",
    "playerId": 203918,
    "teamId": 1610612762
  },
  {
    "firstName": "Al",
    "lastName": "Horford",
    "playerId": 201143,
    "teamId": 1610612738
  },
  {
    "firstName": "Dwight",
    "lastName": "Howard",
    "playerId": 2730,
    "teamId": 1610612766
  },
  {
    "firstName": "Josh",
    "lastName": "Huestis",
    "playerId": 203962,
    "teamId": 1610612760
  },
  {
    "firstName": "Vince",
    "lastName": "Hunter",
    "playerId": 629208,
    "teamId": 1610612763
  },
  {
    "firstName": "Serge",
    "lastName": "Ibaka",
    "playerId": 201586,
    "teamId": 1610612761
  },
  {
    "firstName": "Andre",
    "lastName": "Iguodala",
    "playerId": 2738,
    "teamId": 1610612744
  },
  {
    "firstName": "Ersan",
    "lastName": "Ilyasova",
    "playerId": 101141,
    "teamId": 1610612737
  },
  {
    "firstName": "Joe",
    "lastName": "Ingles",
    "playerId": 204060,
    "teamId": 1610612762
  },
  {
    "firstName": "Brandon",
    "lastName": "Ingram",
    "playerId": 1627742,
    "teamId": 1610612747
  },
  {
    "firstName": "Kyrie",
    "lastName": "Irving",
    "playerId": 202681,
    "teamId": 1610612738
  },
  {
    "firstName": "Jonathan",
    "lastName": "Isaac",
    "playerId": 1628371,
    "teamId": 1610612753
  },
  {
    "firstName": "Wes",
    "lastName": "Iwundu",
    "playerId": 1628411,
    "teamId": 1610612753
  },
  {
    "firstName": "Jarrett",
    "lastName": "Jack",
    "playerId": 101127,
    "teamId": 1610612752
  },
  {
    "firstName": "Demetrius",
    "lastName": "Jackson",
    "playerId": 1627743,
    "teamId": 1610612745
  },
  {
    "firstName": "Frank",
    "lastName": "Jackson",
    "playerId": 1628402,
    "teamId": 1610612740
  },
  {
    "firstName": "Josh",
    "lastName": "Jackson",
    "playerId": 1628367,
    "teamId": 1610612756
  },
  {
    "firstName": "Justin",
    "lastName": "Jackson",
    "playerId": 1628382,
    "teamId": 1610612758
  },
  {
    "firstName": "Reggie",
    "lastName": "Jackson",
    "playerId": 202704,
    "teamId": 1610612765
  },
  {
    "firstName": "LeBron",
    "lastName": "James",
    "playerId": 2544,
    "teamId": 1610612739
  },
  {
    "firstName": "Mike",
    "lastName": "James",
    "playerId": 1628455,
    "teamId": 1610612756
  },
  {
    "firstName": "Al",
    "lastName": "Jefferson",
    "playerId": 2744,
    "teamId": 1610612754
  },
  {
    "firstName": "Richard",
    "lastName": "Jefferson",
    "playerId": 2210,
    "teamId": 1610612743
  },
  {
    "firstName": "Jonas",
    "lastName": "Jerebko",
    "playerId": 201973,
    "teamId": 1610612762
  },
  {
    "firstName": "Amir",
    "lastName": "Johnson",
    "playerId": 101161,
    "teamId": 1610612755
  },
  {
    "firstName": "Brice",
    "lastName": "Johnson",
    "playerId": 1627744,
    "teamId": 1610612746
  },
  {
    "firstName": "Dakari",
    "lastName": "Johnson",
    "playerId": 1626177,
    "teamId": 1610612760
  },
  {
    "firstName": "James",
    "lastName": "Johnson",
    "playerId": 201949,
    "teamId": 1610612748
  },
  {
    "firstName": "Joe",
    "lastName": "Johnson",
    "playerId": 2207,
    "teamId": 1610612762
  },
  {
    "firstName": "Stanley",
    "lastName": "Johnson",
    "playerId": 1626169,
    "teamId": 1610612765
  },
  {
    "firstName": "Tyler",
    "lastName": "Johnson",
    "playerId": 204020,
    "teamId": 1610612748
  },
  {
    "firstName": "Wesley",
    "lastName": "Johnson",
    "playerId": 202325,
    "teamId": 1610612746
  },
  {
    "firstName": "Nikola",
    "lastName": "Jokic",
    "playerId": 203999,
    "teamId": 1610612743
  },
  {
    "firstName": "Damian",
    "lastName": "Jones",
    "playerId": 1627745,
    "teamId": 1610612744
  },
  {
    "firstName": "Jalen",
    "lastName": "Jones",
    "playerId": 1627883,
    "teamId": 1610612740
  },
  {
    "firstName": "Tyus",
    "lastName": "Jones",
    "playerId": 1626145,
    "teamId": 1610612750
  },
  {
    "firstName": "Derrick",
    "lastName": "Jones Jr.",
    "playerId": 1627884,
    "teamId": 1610612756
  },
  {
    "firstName": "DeAndre",
    "lastName": "Jordan",
    "playerId": 201599,
    "teamId": 1610612746
  },
  {
    "firstName": "Cory",
    "lastName": "Joseph",
    "playerId": 202709,
    "teamId": 1610612754
  },
  {
    "firstName": "Frank",
    "lastName": "Kaminsky",
    "playerId": 1626163,
    "teamId": 1610612766
  },
  {
    "firstName": "Enes",
    "lastName": "Kanter",
    "playerId": 202683,
    "teamId": 1610612752
  },
  {
    "firstName": "Luke",
    "lastName": "Kennard",
    "playerId": 1628379,
    "teamId": 1610612765
  },
  {
    "firstName": "Michael",
    "lastName": "Kidd-Gilchrist",
    "playerId": 203077,
    "teamId": 1610612766
  },
  {
    "firstName": "Sean",
    "lastName": "Kilpatrick",
    "playerId": 203930,
    "teamId": 1610612751
  },
  {
    "firstName": "Maxi",
    "lastName": "Kleber",
    "playerId": 1628467,
    "teamId": 1610612742
  },
  {
    "firstName": "Brandon",
    "lastName": "Knight",
    "playerId": 202688,
    "teamId": 1610612756
  },
  {
    "firstName": "Furkan",
    "lastName": "Korkmaz",
    "playerId": 1627788,
    "teamId": 1610612755
  },
  {
    "firstName": "Luke",
    "lastName": "Kornet",
    "playerId": 1628436,
    "teamId": 1610612752
  },
  {
    "firstName": "Kyle",
    "lastName": "Korver",
    "playerId": 2594,
    "teamId": 1610612739
  },
  {
    "firstName": "Kosta",
    "lastName": "Koufos",
    "playerId": 201585,
    "teamId": 1610612758
  },
  {
    "firstName": "Kyle",
    "lastName": "Kuzma",
    "playerId": 1628398,
    "teamId": 1610612747
  },
  {
    "firstName": "Mindaugas",
    "lastName": "Kuzminskas",
    "playerId": 1627851,
    "teamId": 1610612752
  },
  {
    "firstName": "Zach",
    "lastName": "LaVine",
    "playerId": 203897,
    "teamId": 1610612741
  },
  {
    "firstName": "Skal",
    "lastName": "Labissiere",
    "playerId": 1627746,
    "teamId": 1610612758
  },
  {
    "firstName": "Jeremy",
    "lastName": "Lamb",
    "playerId": 203087,
    "teamId": 1610612766
  },
  {
    "firstName": "Shane",
    "lastName": "Larkin",
    "playerId": 203499,
    "teamId": 1610612738
  },
  {
    "firstName": "Joffrey",
    "lastName": "Lauvergne",
    "playerId": 203530,
    "teamId": 1610612759
  },
  {
    "firstName": "Jake",
    "lastName": "Layman",
    "playerId": 1627774,
    "teamId": 1610612757
  },
  {
    "firstName": "Caris",
    "lastName": "LeVert",
    "playerId": 1627747,
    "teamId": 1610612751
  },
  {
    "firstName": "TJ",
    "lastName": "Leaf",
    "playerId": 1628388,
    "teamId": 1610612754
  },
  {
    "firstName": "Courtney",
    "lastName": "Lee",
    "playerId": 201584,
    "teamId": 1610612752
  },
  {
    "firstName": "Alex",
    "lastName": "Len",
    "playerId": 203458,
    "teamId": 1610612756
  },
  {
    "firstName": "Kawhi",
    "lastName": "Leonard",
    "playerId": 202695,
    "teamId": 1610612759
  },
  {
    "firstName": "Meyers",
    "lastName": "Leonard",
    "playerId": 203086,
    "teamId": 1610612757
  },
  {
    "firstName": "Jon",
    "lastName": "Leuer",
    "playerId": 202720,
    "teamId": 1610612765
  },
  {
    "firstName": "DeAndre",
    "lastName": "Liggins",
    "playerId": 202732,
    "teamId": 1610612749
  },
  {
    "firstName": "Damian",
    "lastName": "Lillard",
    "playerId": 203081,
    "teamId": 1610612757
  },
  {
    "firstName": "Jeremy",
    "lastName": "Lin",
    "playerId": 202391,
    "teamId": 1610612751
  },
  {
    "firstName": "Shaun",
    "lastName": "Livingston",
    "playerId": 2733,
    "teamId": 1610612744
  },
  {
    "firstName": "Kevon",
    "lastName": "Looney",
    "playerId": 1626172,
    "teamId": 1610612744
  },
  {
    "firstName": "Brook",
    "lastName": "Lopez",
    "playerId": 201572,
    "teamId": 1610612747
  },
  {
    "firstName": "Robin",
    "lastName": "Lopez",
    "playerId": 201577,
    "teamId": 1610612741
  },
  {
    "firstName": "Kevin",
    "lastName": "Love",
    "playerId": 201567,
    "teamId": 1610612739
  },
  {
    "firstName": "Kyle",
    "lastName": "Lowry",
    "playerId": 200768,
    "teamId": 1610612761
  },
  {
    "firstName": "Timothe",
    "lastName": "Luwawu-Cabarrot",
    "playerId": 1627789,
    "teamId": 1610612755
  },
  {
    "firstName": "Tyler",
    "lastName": "Lydon",
    "playerId": 1628399,
    "teamId": 1610612743
  },
  {
    "firstName": "Trey",
    "lastName": "Lyles",
    "playerId": 1626168,
    "teamId": 1610612743
  },
  {
    "firstName": "Sheldon",
    "lastName": "Mac",
    "playerId": 1627815,
    "teamId": 1610612764
  },
  {
    "firstName": "Shelvin",
    "lastName": "Mack",
    "playerId": 202714,
    "teamId": 1610612753
  },
  {
    "firstName": "Josh",
    "lastName": "Magette",
    "playerId": 203705,
    "teamId": 1610612737
  },
  {
    "firstName": "Ian",
    "lastName": "Mahinmi",
    "playerId": 101133,
    "teamId": 1610612764
  },
  {
    "firstName": "Thon",
    "lastName": "Maker",
    "playerId": 1627748,
    "teamId": 1610612749
  },
  {
    "firstName": "Boban",
    "lastName": "Marjanovic",
    "playerId": 1626246,
    "teamId": 1610612765
  },
  {
    "firstName": "Lauri",
    "lastName": "Markkanen",
    "playerId": 1628374,
    "teamId": 1610612741
  },
  {
    "firstName": "Jarell",
    "lastName": "Martin",
    "playerId": 1626185,
    "teamId": 1610612763
  },
  {
    "firstName": "Frank",
    "lastName": "Mason",
    "playerId": 1628412,
    "teamId": 1610612758
  },
  {
    "firstName": "Mangok",
    "lastName": "Mathiang",
    "playerId": 1628493,
    "teamId": 1610612766
  },
  {
    "firstName": "Wesley",
    "lastName": "Matthews",
    "playerId": 202083,
    "teamId": 1610612742
  },
  {
    "firstName": "Luc",
    "lastName": "Mbah a Moute",
    "playerId": 201601,
    "teamId": 1610612745
  },
  {
    "firstName": "James Michael",
    "lastName": "McAdoo",
    "playerId": 203949,
    "teamId": 1610612755
  },
  {
    "firstName": "Patrick",
    "lastName": "McCaw",
    "playerId": 1627775,
    "teamId": 1610612744
  },
  {
    "firstName": "CJ",
    "lastName": "McCollum",
    "playerId": 203468,
    "teamId": 1610612757
  },
  {
    "firstName": "T.J.",
    "lastName": "McConnell",
    "playerId": 204456,
    "teamId": 1610612755
  },
  {
    "firstName": "Chris",
    "lastName": "McCullough",
    "playerId": 1626191,
    "teamId": 1610612764
  },
  {
    "firstName": "Doug",
    "lastName": "McDermott",
    "playerId": 203926,
    "teamId": 1610612752
  },
  {
    "firstName": "JaVale",
    "lastName": "McGee",
    "playerId": 201580,
    "teamId": 1610612744
  },
  {
    "firstName": "Rodney",
    "lastName": "McGruder",
    "playerId": 203585,
    "teamId": 1610612748
  },
  {
    "firstName": "Alfonzo",
    "lastName": "McKinnie",
    "playerId": 1628035,
    "teamId": 1610612761
  },
  {
    "firstName": "Ben",
    "lastName": "McLemore",
    "playerId": 203463,
    "teamId": 1610612763
  },
  {
    "firstName": "Josh",
    "lastName": "McRoberts",
    "playerId": 201177,
    "teamId": 1610612742
  },
  {
    "firstName": "Jodie",
    "lastName": "Meeks",
    "playerId": 201975,
    "teamId": 1610612764
  },
  {
    "firstName": "Salah",
    "lastName": "Mejri",
    "playerId": 1626257,
    "teamId": 1610612742
  },
  {
    "firstName": "Jordan",
    "lastName": "Mickey",
    "playerId": 1626175,
    "teamId": 1610612748
  },
  {
    "firstName": "Khris",
    "lastName": "Middleton",
    "playerId": 203114,
    "teamId": 1610612749
  },
  {
    "firstName": "CJ",
    "lastName": "Miles",
    "playerId": 101139,
    "teamId": 1610612761
  },
  {
    "firstName": "Darius",
    "lastName": "Miller",
    "playerId": 203121,
    "teamId": 1610612740
  },
  {
    "firstName": "Malcolm",
    "lastName": "Miller",
    "playerId": 1626259,
    "teamId": 1610612761
  },
  {
    "firstName": "Patty",
    "lastName": "Mills",
    "playerId": 201988,
    "teamId": 1610612759
  },
  {
    "firstName": "Paul",
    "lastName": "Millsap",
    "playerId": 200794,
    "teamId": 1610612743
  },
  {
    "firstName": "Nikola",
    "lastName": "Mirotic",
    "playerId": 202703,
    "teamId": 1610612741
  },
  {
    "firstName": "Donovan",
    "lastName": "Mitchell",
    "playerId": 1628378,
    "teamId": 1610612762
  },
  {
    "firstName": "Malik",
    "lastName": "Monk",
    "playerId": 1628370,
    "teamId": 1610612766
  },
  {
    "firstName": "Greg",
    "lastName": "Monroe",
    "playerId": 202328,
    "teamId": 1610612749
  },
  {
    "firstName": "Luis",
    "lastName": "Montero",
    "playerId": 1626242,
    "teamId": 1610612765
  },
  {
    "firstName": "E'Twaun",
    "lastName": "Moore",
    "playerId": 202734,
    "teamId": 1610612740
  },
  {
    "firstName": "Eric",
    "lastName": "Moreland",
    "playerId": 203961,
    "teamId": 1610612765
  },
  {
    "firstName": "Marcus",
    "lastName": "Morris",
    "playerId": 202694,
    "teamId": 1610612738
  },
  {
    "firstName": "Markieff",
    "lastName": "Morris",
    "playerId": 202693,
    "teamId": 1610612764
  },
  {
    "firstName": "Monte",
    "lastName": "Morris",
    "playerId": 1628420,
    "teamId": 1610612743
  },
  {
    "firstName": "Johnathan",
    "lastName": "Motley",
    "playerId": 1628405,
    "teamId": 1610612742
  },
  {
    "firstName": "Timofey",
    "lastName": "Mozgov",
    "playerId": 202389,
    "teamId": 1610612751
  },
  {
    "firstName": "Emmanuel",
    "lastName": "Mudiay",
    "playerId": 1626144,
    "teamId": 1610612743
  },
  {
    "firstName": "Shabazz",
    "lastName": "Muhammad",
    "playerId": 203498,
    "teamId": 1610612750
  },
  {
    "firstName": "Dejounte",
    "lastName": "Murray",
    "playerId": 1627749,
    "teamId": 1610612759
  },
  {
    "firstName": "Jamal",
    "lastName": "Murray",
    "playerId": 1627750,
    "teamId": 1610612743
  },
  {
    "firstName": "Mike",
    "lastName": "Muscala",
    "playerId": 203488,
    "teamId": 1610612737
  },
  {
    "firstName": "Abdel",
    "lastName": "Nader",
    "playerId": 1627846,
    "teamId": 1610612738
  },
  {
    "firstName": "Larry",
    "lastName": "Nance Jr.",
    "playerId": 1626204,
    "teamId": 1610612747
  },
  {
    "firstName": "Shabazz",
    "lastName": "Napier",
    "playerId": 203894,
    "teamId": 1610612757
  },
  {
    "firstName": "Jameer",
    "lastName": "Nelson",
    "playerId": 2749,
    "teamId": 1610612740
  },
  {
    "firstName": "Raul",
    "lastName": "Neto",
    "playerId": 203526,
    "teamId": 1610612762
  },
  {
    "firstName": "Joakim",
    "lastName": "Noah",
    "playerId": 201149,
    "teamId": 1610612752
  },
  {
    "firstName": "Nerlens",
    "lastName": "Noel",
    "playerId": 203457,
    "teamId": 1610612742
  },
  {
    "firstName": "Lucas",
    "lastName": "Nogueira",
    "playerId": 203512,
    "teamId": 1610612761
  },
  {
    "firstName": "Dirk",
    "lastName": "Nowitzki",
    "playerId": 1717,
    "teamId": 1610612742
  },
  {
    "firstName": "Frank",
    "lastName": "Ntilikina",
    "playerId": 1628373,
    "teamId": 1610612752
  },
  {
    "firstName": "Jusuf",
    "lastName": "Nurkic",
    "playerId": 203994,
    "teamId": 1610612757
  },
  {
    "firstName": "David",
    "lastName": "Nwaba",
    "playerId": 1628021,
    "teamId": 1610612741
  },
  {
    "firstName": "Johnny",
    "lastName": "O'Bryant III",
    "playerId": 203948,
    "teamId": 1610612766
  },
  {
    "firstName": "Royce",
    "lastName": "O'Neale",
    "playerId": 1626220,
    "teamId": 1610612762
  },
  {
    "firstName": "Kyle",
    "lastName": "O'Quinn",
    "playerId": 203124,
    "teamId": 1610612752
  },
  {
    "firstName": "Semi",
    "lastName": "Ojeleye",
    "playerId": 1628400,
    "teamId": 1610612738
  },
  {
    "firstName": "Jahlil",
    "lastName": "Okafor",
    "playerId": 1626143,
    "teamId": 1610612755
  },
  {
    "firstName": "Victor",
    "lastName": "Oladipo",
    "playerId": 203506,
    "teamId": 1610612754
  },
  {
    "firstName": "Kelly",
    "lastName": "Olynyk",
    "playerId": 203482,
    "teamId": 1610612748
  },
  {
    "firstName": "Chinanu",
    "lastName": "Onuaku",
    "playerId": 1627778,
    "teamId": 1610612745
  },
  {
    "firstName": "Cedi",
    "lastName": "Osman",
    "playerId": 1626224,
    "teamId": 1610612739
  },
  {
    "firstName": "Yakuba",
    "lastName": "Ouattara",
    "playerId": 1628473,
    "teamId": 1610612751
  },
  {
    "firstName": "Kelly",
    "lastName": "Oubre Jr.",
    "playerId": 1626162,
    "teamId": 1610612764
  },
  {
    "firstName": "Zaza",
    "lastName": "Pachulia",
    "playerId": 2585,
    "teamId": 1610612744
  },
  {
    "firstName": "Marcus",
    "lastName": "Paige",
    "playerId": 1627779,
    "teamId": 1610612766
  },
  {
    "firstName": "Georgios",
    "lastName": "Papagiannis",
    "playerId": 1627834,
    "teamId": 1610612758
  },
  {
    "firstName": "Jabari",
    "lastName": "Parker",
    "playerId": 203953,
    "teamId": 1610612749
  },
  {
    "firstName": "Tony",
    "lastName": "Parker",
    "playerId": 2225,
    "teamId": 1610612759
  },
  {
    "firstName": "Chandler",
    "lastName": "Parsons",
    "playerId": 202718,
    "teamId": 1610612763
  },
  {
    "firstName": "Patrick",
    "lastName": "Patterson",
    "playerId": 202335,
    "teamId": 1610612760
  },
  {
    "firstName": "Justin",
    "lastName": "Patton",
    "playerId": 1628383,
    "teamId": 1610612750
  },
  {
    "firstName": "Brandon",
    "lastName": "Paul",
    "playerId": 203464,
    "teamId": 1610612759
  },
  {
    "firstName": "Chris",
    "lastName": "Paul",
    "playerId": 101108,
    "teamId": 1610612745
  },
  {
    "firstName": "Adreian",
    "lastName": "Payne",
    "playerId": 203940,
    "teamId": 1610612753
  },
  {
    "firstName": "Cameron",
    "lastName": "Payne",
    "playerId": 1626166,
    "teamId": 1610612741
  },
  {
    "firstName": "Elfrid",
    "lastName": "Payton",
    "playerId": 203901,
    "teamId": 1610612753
  },
  {
    "firstName": "Gary",
    "lastName": "Payton II",
    "playerId": 1627780,
    "teamId": 1610612749
  },
  {
    "firstName": "London",
    "lastName": "Perrantes",
    "playerId": 1628506,
    "teamId": 1610612739
  },
  {
    "firstName": "Alec",
    "lastName": "Peters",
    "playerId": 1628409,
    "teamId": 1610612756
  },
  {
    "firstName": "Mason",
    "lastName": "Plumlee",
    "playerId": 203486,
    "teamId": 1610612743
  },
  {
    "firstName": "Miles",
    "lastName": "Plumlee",
    "playerId": 203101,
    "teamId": 1610612737
  },
  {
    "firstName": "Jakob",
    "lastName": "Poeltl",
    "playerId": 1627751,
    "teamId": 1610612761
  },
  {
    "firstName": "Quincy",
    "lastName": "Pondexter",
    "playerId": 202347,
    "teamId": 1610612741
  },
  {
    "firstName": "Otto",
    "lastName": "Porter Jr.",
    "playerId": 203490,
    "teamId": 1610612764
  },
  {
    "firstName": "Bobby",
    "lastName": "Portis",
    "playerId": 1626171,
    "teamId": 1610612741
  },
  {
    "firstName": "Kristaps",
    "lastName": "Porzingis",
    "playerId": 204001,
    "teamId": 1610612752
  },
  {
    "firstName": "Dwight",
    "lastName": "Powell",
    "playerId": 203939,
    "teamId": 1610612742
  },
  {
    "firstName": "Norman",
    "lastName": "Powell",
    "playerId": 1626181,
    "teamId": 1610612761
  },
  {
    "firstName": "Alex",
    "lastName": "Poythress",
    "playerId": 1627816,
    "teamId": 1610612754
  },
  {
    "firstName": "Taurean",
    "lastName": "Prince",
    "playerId": 1627752,
    "teamId": 1610612737
  },
  {
    "firstName": "Jacob",
    "lastName": "Pullen",
    "playerId": 1626643,
    "teamId": 1610612755
  },
  {
    "firstName": "Ivan",
    "lastName": "Rabb",
    "playerId": 1628397,
    "teamId": 1610612763
  },
  {
    "firstName": "Julius",
    "lastName": "Randle",
    "playerId": 203944,
    "teamId": 1610612747
  },
  {
    "firstName": "Zach",
    "lastName": "Randolph",
    "playerId": 2216,
    "teamId": 1610612758
  },
  {
    "firstName": "JJ",
    "lastName": "Redick",
    "playerId": 200755,
    "teamId": 1610612755
  },
  {
    "firstName": "Davon",
    "lastName": "Reed",
    "playerId": 1628432,
    "teamId": 1610612756
  },
  {
    "firstName": "Willie",
    "lastName": "Reed",
    "playerId": 203186,
    "teamId": 1610612746
  },
  {
    "firstName": "Josh",
    "lastName": "Richardson",
    "playerId": 1626196,
    "teamId": 1610612748
  },
  {
    "firstName": "Malachi",
    "lastName": "Richardson",
    "playerId": 1627781,
    "teamId": 1610612758
  },
  {
    "firstName": "Austin",
    "lastName": "Rivers",
    "playerId": 203085,
    "teamId": 1610612746
  },
  {
    "firstName": "Andre",
    "lastName": "Roberson",
    "playerId": 203460,
    "teamId": 1610612760
  },
  {
    "firstName": "Devin",
    "lastName": "Robinson",
    "playerId": 1628421,
    "teamId": 1610612764
  },
  {
    "firstName": "Glenn",
    "lastName": "Robinson III",
    "playerId": 203922,
    "teamId": 1610612754
  },
  {
    "firstName": "Rajon",
    "lastName": "Rondo",
    "playerId": 200765,
    "teamId": 1610612740
  },
  {
    "firstName": "Derrick",
    "lastName": "Rose",
    "playerId": 201565,
    "teamId": 1610612739
  },
  {
    "firstName": "Terrence",
    "lastName": "Ross",
    "playerId": 203082,
    "teamId": 1610612753
  },
  {
    "firstName": "Terry",
    "lastName": "Rozier",
    "playerId": 1626179,
    "teamId": 1610612738
  },
  {
    "firstName": "Ricky",
    "lastName": "Rubio",
    "playerId": 201937,
    "teamId": 1610612762
  },
  {
    "firstName": "D'Angelo",
    "lastName": "Russell",
    "playerId": 1626156,
    "teamId": 1610612751
  },
  {
    "firstName": "Domantas",
    "lastName": "Sabonis",
    "playerId": 1627734,
    "teamId": 1610612754
  },
  {
    "firstName": "JaKarr",
    "lastName": "Sampson",
    "playerId": 203960,
    "teamId": 1610612758
  },
  {
    "firstName": "Dario",
    "lastName": "Saric",
    "playerId": 203967,
    "teamId": 1610612755
  },
  {
    "firstName": "Tomas",
    "lastName": "Satoransky",
    "playerId": 203107,
    "teamId": 1610612764
  },
  {
    "firstName": "Dennis",
    "lastName": "Schroder",
    "playerId": 203471,
    "teamId": 1610612737
  },
  {
    "firstName": "Mike",
    "lastName": "Scott",
    "playerId": 203118,
    "teamId": 1610612764
  },
  {
    "firstName": "Thabo",
    "lastName": "Sefolosha",
    "playerId": 200757,
    "teamId": 1610612762
  },
  {
    "firstName": "Wayne",
    "lastName": "Selden",
    "playerId": 1627782,
    "teamId": 1610612763
  },
  {
    "firstName": "Ramon",
    "lastName": "Sessions",
    "playerId": 201196,
    "teamId": 1610612752
  },
  {
    "firstName": "Iman",
    "lastName": "Shumpert",
    "playerId": 202697,
    "teamId": 1610612739
  },
  {
    "firstName": "Pascal",
    "lastName": "Siakam",
    "playerId": 1627783,
    "teamId": 1610612761
  },
  {
    "firstName": "Ben",
    "lastName": "Simmons",
    "playerId": 1627732,
    "teamId": 1610612755
  },
  {
    "firstName": "Jonathon",
    "lastName": "Simmons",
    "playerId": 203613,
    "teamId": 1610612753
  },
  {
    "firstName": "Kobi",
    "lastName": "Simmons",
    "playerId": 1628424,
    "teamId": 1610612763
  },
  {
    "firstName": "Kyle",
    "lastName": "Singler",
    "playerId": 202713,
    "teamId": 1610612760
  },
  {
    "firstName": "Marcus",
    "lastName": "Smart",
    "playerId": 203935,
    "teamId": 1610612738
  },
  {
    "firstName": "Ish",
    "lastName": "Smith",
    "playerId": 202397,
    "teamId": 1610612765
  },
  {
    "firstName": "JR",
    "lastName": "Smith",
    "playerId": 2747,
    "teamId": 1610612739
  },
  {
    "firstName": "Jason",
    "lastName": "Smith",
    "playerId": 201160,
    "teamId": 1610612764
  },
  {
    "firstName": "Dennis",
    "lastName": "Smith Jr.",
    "playerId": 1628372,
    "teamId": 1610612742
  },
  {
    "firstName": "Tony",
    "lastName": "Snell",
    "playerId": 203503,
    "teamId": 1610612749
  },
  {
    "firstName": "Marreese",
    "lastName": "Speights",
    "playerId": 201578,
    "teamId": 1610612753
  },
  {
    "firstName": "Nik",
    "lastName": "Stauskas",
    "playerId": 203917,
    "teamId": 1610612755
  },
  {
    "firstName": "Lance",
    "lastName": "Stephenson",
    "playerId": 202362,
    "teamId": 1610612754
  },
  {
    "firstName": "Julyan",
    "lastName": "Stone",
    "playerId": 202933,
    "teamId": 1610612766
  },
  {
    "firstName": "Edmond",
    "lastName": "Sumner",
    "playerId": 1628410,
    "teamId": 1610612754
  },
  {
    "firstName": "Caleb",
    "lastName": "Swanigan",
    "playerId": 1628403,
    "teamId": 1610612757
  },
  {
    "firstName": "Jayson",
    "lastName": "Tatum",
    "playerId": 1628369,
    "teamId": 1610612738
  },
  {
    "firstName": "Isaiah",
    "lastName": "Taylor",
    "playerId": 1627819,
    "teamId": 1610612737
  },
  {
    "firstName": "Jeff",
    "lastName": "Teague",
    "playerId": 201952,
    "teamId": 1610612750
  },
  {
    "firstName": "Mirza",
    "lastName": "Teletovic",
    "playerId": 203141,
    "teamId": 1610612749
  },
  {
    "firstName": "Garrett",
    "lastName": "Temple",
    "playerId": 202066,
    "teamId": 1610612758
  },
  {
    "firstName": "Milos",
    "lastName": "Teodosic",
    "playerId": 1628462,
    "teamId": 1610612746
  },
  {
    "firstName": "Jason",
    "lastName": "Terry",
    "playerId": 1891,
    "teamId": 1610612749
  },
  {
    "firstName": "Daniel",
    "lastName": "Theis",
    "playerId": 1628464,
    "teamId": 1610612738
  },
  {
    "firstName": "Isaiah",
    "lastName": "Thomas",
    "playerId": 202738,
    "teamId": 1610612739
  },
  {
    "firstName": "Lance",
    "lastName": "Thomas",
    "playerId": 202498,
    "teamId": 1610612752
  },
  {
    "firstName": "Klay",
    "lastName": "Thompson",
    "playerId": 202691,
    "teamId": 1610612744
  },
  {
    "firstName": "Tristan",
    "lastName": "Thompson",
    "playerId": 202684,
    "teamId": 1610612739
  },
  {
    "firstName": "Sindarius",
    "lastName": "Thornwell",
    "playerId": 1628414,
    "teamId": 1610612746
  },
  {
    "firstName": "Anthony",
    "lastName": "Tolliver",
    "playerId": 201229,
    "teamId": 1610612765
  },
  {
    "firstName": "Karl-Anthony",
    "lastName": "Towns",
    "playerId": 1626157,
    "teamId": 1610612750
  },
  {
    "firstName": "PJ",
    "lastName": "Tucker",
    "playerId": 200782,
    "teamId": 1610612745
  },
  {
    "firstName": "Evan",
    "lastName": "Turner",
    "playerId": 202323,
    "teamId": 1610612757
  },
  {
    "firstName": "Myles",
    "lastName": "Turner",
    "playerId": 1626167,
    "teamId": 1610612754
  },
  {
    "firstName": "Ekpe",
    "lastName": "Udoh",
    "playerId": 202327,
    "teamId": 1610612762
  },
  {
    "firstName": "Tyler",
    "lastName": "Ulis",
    "playerId": 1627755,
    "teamId": 1610612756
  },
  {
    "firstName": "Jonas",
    "lastName": "Valanciunas",
    "playerId": 202685,
    "teamId": 1610612761
  },
  {
    "firstName": "Denzel",
    "lastName": "Valentine",
    "playerId": 1627756,
    "teamId": 1610612741
  },
  {
    "firstName": "Fred",
    "lastName": "VanVleet",
    "playerId": 1627832,
    "teamId": 1610612761
  },
  {
    "firstName": "Rashad",
    "lastName": "Vaughn",
    "playerId": 1626173,
    "teamId": 1610612749
  },
  {
    "firstName": "Noah",
    "lastName": "Vonleh",
    "playerId": 203943,
    "teamId": 1610612757
  },
  {
    "firstName": "Nikola",
    "lastName": "Vucevic",
    "playerId": 202696,
    "teamId": 1610612753
  },
  {
    "firstName": "Dwyane",
    "lastName": "Wade",
    "playerId": 2548,
    "teamId": 1610612739
  },
  {
    "firstName": "Dion",
    "lastName": "Waiters",
    "playerId": 203079,
    "teamId": 1610612748
  },
  {
    "firstName": "Kemba",
    "lastName": "Walker",
    "playerId": 202689,
    "teamId": 1610612766
  },
  {
    "firstName": "John",
    "lastName": "Wall",
    "playerId": 202322,
    "teamId": 1610612764
  },
  {
    "firstName": "Derrick",
    "lastName": "Walton Jr.",
    "playerId": 1628476,
    "teamId": 1610612748
  },
  {
    "firstName": "TJ",
    "lastName": "Warren",
    "playerId": 203933,
    "teamId": 1610612756
  },
  {
    "firstName": "David",
    "lastName": "West",
    "playerId": 2561,
    "teamId": 1610612744
  },
  {
    "firstName": "Russell",
    "lastName": "Westbrook",
    "playerId": 201566,
    "teamId": 1610612760
  },
  {
    "firstName": "Derrick",
    "lastName": "White",
    "playerId": 1628401,
    "teamId": 1610612759
  },
  {
    "firstName": "Okaro",
    "lastName": "White",
    "playerId": 1627855,
    "teamId": 1610612748
  },
  {
    "firstName": "Isaiah",
    "lastName": "Whitehead",
    "playerId": 1627785,
    "teamId": 1610612751
  },
  {
    "firstName": "Hassan",
    "lastName": "Whiteside",
    "playerId": 202355,
    "teamId": 1610612748
  },
  {
    "firstName": "Andrew",
    "lastName": "Wiggins",
    "playerId": 203952,
    "teamId": 1610612750
  },
  {
    "firstName": "CJ",
    "lastName": "Wilcox",
    "playerId": 203912,
    "teamId": 1610612757
  },
  {
    "firstName": "Jacob",
    "lastName": "Wiley",
    "playerId": 1628451,
    "teamId": 1610612751
  },
  {
    "firstName": "Damien",
    "lastName": "Wilkins",
    "playerId": 2863,
    "teamId": 1610612754
  },
  {
    "firstName": "Alan",
    "lastName": "Williams",
    "playerId": 1626210,
    "teamId": 1610612756
  },
  {
    "firstName": "C.J.",
    "lastName": "Williams",
    "playerId": 203710,
    "teamId": 1610612746
  },
  {
    "firstName": "Lou",
    "lastName": "Williams",
    "playerId": 101150,
    "teamId": 1610612746
  },
  {
    "firstName": "Marvin",
    "lastName": "Williams",
    "playerId": 101107,
    "teamId": 1610612766
  },
  {
    "firstName": "Troy",
    "lastName": "Williams",
    "playerId": 1627786,
    "teamId": 1610612745
  },
  {
    "firstName": "Matt",
    "lastName": "Williams Jr.",
    "playerId": 1628475,
    "teamId": 1610612748
  },
  {
    "firstName": "D.J.",
    "lastName": "Wilson",
    "playerId": 1628391,
    "teamId": 1610612749
  },
  {
    "firstName": "Jamil",
    "lastName": "Wilson",
    "playerId": 203966,
    "teamId": 1610612746
  },
  {
    "firstName": "Justise",
    "lastName": "Winslow",
    "playerId": 1626159,
    "teamId": 1610612748
  },
  {
    "firstName": "Jeff",
    "lastName": "Withey",
    "playerId": 203481,
    "teamId": 1610612742
  },
  {
    "firstName": "Nate",
    "lastName": "Wolters",
    "playerId": 203489,
    "teamId": 1610612762
  },
  {
    "firstName": "Brandan",
    "lastName": "Wright",
    "playerId": 201148,
    "teamId": 1610612763
  },
  {
    "firstName": "Delon",
    "lastName": "Wright",
    "playerId": 1626153,
    "teamId": 1610612761
  },
  {
    "firstName": "Guerschon",
    "lastName": "Yabusele",
    "playerId": 1627824,
    "teamId": 1610612738
  },
  {
    "firstName": "Joe",
    "lastName": "Young",
    "playerId": 1626202,
    "teamId": 1610612754
  },
  {
    "firstName": "Mike",
    "lastName": "Young",
    "playerId": 1628454,
    "teamId": 1610612764
  },
  {
    "firstName": "Nick",
    "lastName": "Young",
    "playerId": 201156,
    "teamId": 1610612744
  },
  {
    "firstName": "Thaddeus",
    "lastName": "Young",
    "playerId": 201152,
    "teamId": 1610612754
  },
  {
    "firstName": "Cody",
    "lastName": "Zeller",
    "playerId": 203469,
    "teamId": 1610612766
  },
  {
    "firstName": "Tyler",
    "lastName": "Zeller",
    "playerId": 203092,
    "teamId": 1610612751
  },
  {
    "firstName": "Zhou Qi",
    "lastName": "",
    "playerId": 1627753,
    "teamId": 1610612745
  },
  {
    "firstName": "Paul",
    "lastName": "Zipser",
    "playerId": 1627835,
    "teamId": 1610612741
  },
  {
    "firstName": "Ante",
    "lastName": "Zizic",
    "playerId": 1627790,
    "teamId": 1610612739
  },
  {
    "firstName": "Ivica",
    "lastName": "Zubac",
    "playerId": 1627826,
    "teamId": 1610612747
  }
]
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
        "fullName": "Los Angeles Clippers",
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


    var allColors = [
    {
    "name": "Atlanta Hawks",
    "league": "nba",
    "colors": {
      "rgb"   :   ["225 58 62",       "196 214 0",        "6 25 34"],
      "cmyk"  :   ["0 91 76 6",       "29 2 100 0",       "30 0 0 100"],
      "pms"   :   ["186",             "382",              "Black"]
    }
  },
  {
    "name": "Boston Celtics",
    "league": "nba",
    "colors" : {
      "rgb"   :   ["0 131 72",        "187 151 83",       "167 56 50",        "250 179 131",      "6 25 34"],
      "cmyk"  :   ["100 0 91 27",     "30 40 80 0",       "40 95 100 0",      "0 35 50 0",        "30 0 0 100"],
      "pms"   :   ["356",             "874",              "174",              "472",              "Black"]
    }
  },
  {
    "name": "Brooklyn Nets",
    "league": "nba",
    "colors" : {
      "rgb"   :   ["186 195 201",     "6 25 34"],
      "cmyk"  :   ["30 0 0 100"],
      "pms"   :   ["Black"]
    }
  },
  {
    "name": "Charlotte Hornets",
    "league": "nba",
    "colors" : {
      "rgb"   :   ["29 17 96",        "0 140 168",        "161 161 164"],
      "cmyk"  :   ["98 100 0 43",     "100 0 19 23",      "0 1 0 43"],
      "pms"   :   ["275",             "3145",             "Cool Gray 8"]
    }
  },
  {
    "name": "Chicago Bulls",
    "league": "nba",
    "colors" : {
      "rgb"   :   ["206 17 65",       "6 25 34"],
      "cmyk"  :   ["0 100 65 15",     "30 0 0 100"],
      "pms"   :   ["200",             "Black"]
    }
  },
  {
    "name": "Cleveland Cavaliers",
    "league": "nba",
    "colors" : {
      "rgb"   :   ["134 0 56",        "253 187 48",       "0 45 98"],
      "cmyk"  :   ["0 100 34 53",     "0 29 91 0",        "100 68 54 0"],
      "pms"   :   ["209",             "1235",             "282"]
    }
  },
  {
    "name": "Dallas Mavericks",
    "league": "nba",
    "colors" : {
      "rgb"   :   ["0 125 197",       "196 206 211",      "6 25 34",          "32 56 91"],
      "cmyk"  :   ["100 40 0 0",      "5 0 0 20",         "30 0 0 100",       "94 79 36 32"],
      "pms"   :   ["2935",            "877",              "Black",            "289"]
    }
  },
  {
    "name": "Denver Nuggets",
    "league": "nba",
    "colors" : {
      "rgb"   :   ["77 144 205",      "253 185 39",       "15 88 108"],
      "cmyk"  :   ["69 34 0 0",       "0 30 94 0",        "100 72 56 0"],
      "pms"   :   ["279",             "123",              "282"]
    }
  },
  {
    "name": "Detroit Pistons",
    "league": "nba",
    "colors": {
      "rgb"   :   ["237 23 76",       "0 107 182",        "15 88 108"],
      "cmyk"  :   ["0 100 65 0",      "100 56 0 0",       "100 72 0 56"],
      "pms"   :   ["199",             "293",              "282"]
    }
  },
  {
    "name": "Golden State Warriors",
    "league": "nba",
    "colors": {
      "rgb"   :   ["253 185 39",      "0 107 182",        "38 40 42"],
      "cmyk"  :   ["0 30 94 0",       "100 56 0 0",       "73 65 62 67"],
      "pms"   :   ["123",             "293",              "426"]
    }
  },
  {
    "name": "Houston Rockets",
    "league": "nba",
    "colors": {
      "rgb"   :   ["206 17 65",       "196 206 211",      "6 25 34",          "253 185 39"],
      "cmyk"  :   ["100 65 15",       "5 0 0 20",         "30 0 0 100",       "0 30 94 0"],
      "pms"   :   ["200",             "877",              "Black",            "123"]
    }
  },
  {
    "name": "Indiana Pacers",
    "league": "nba",
    "colors": {
      "rgb"   :   ["255 198 51",      "0 39 93",          "190 192 194"],
      "cmyk"  :   ["0 23 90 0",       "100 72 0 56",      "0 0 0 29"],
      "pms"   :   ["1235",            "282",              "Cool Gray 5"]
    }
  },
  {
    "name": "Los Angeles Clippers",
    "league": "nba",
    "colors": {
      "rgb"   :   ["237 23 76",       "0 107 182",        "190 192 194",       "0 0 0"],
      "cmyk"  :   ["0 100 65 0",      "100 56 0 0",       "30 0 0 100",       "0 0 0 29"],
      "pms"   :   ["199",             "293",              "Black",            "Cool Gray 5"]
    }
  },
  {
    "name": "Los Angeles Lakers",
    "league": "nba",
    "colors": {
      "rgb"   :   ["253 185 39",      "85 37 130",        "6 25 34",          "129 119 183"],
      "cmyk"  :   ["0 30 94 0",       "79 100 0 12",      "30 100 0 0",       "54 56 0 0"],
      "pms"   :   ["123",             "526",              "Black",            "265"]
    }
  },
  {
    "name": "Memphis Grizzlies",
    "league": "nba",
    "colors": {
      "rgb"   :   ["15 88 108",       "115 153 198",      "190 212 233",      "253 185 39"],
      "cmyk"  :   ["100 72 0 56",     "50 25 0 10",       "24 9 2 0",         "0 30 94 0"],
      "pms"   :   ["289",             "652",              "650",              "123"]
    }
  },
  {
    "name": "Miami Heat",
    "league": "nba",
    "colors": {
      "rgb"   :   ["152 0 46",        "249 160 27",       "6 25 34",          "188 190 192"],
      "cmyk"  :   ["0 100 61 43",     "0 43 100 0",       "30 0 0 100",       "40 0 0 0"],
      "pms"   :   ["202",             "137",              "Black",            "877"]
    }
  },
  {
    "name": "Milwaukee Bucks",
    "league": "nba",
    "colors": {
      "rgb"   :   ["0 71 27",         "240 235 210",      "6 25 34",          "0 125 197"],
      "cmyk"  :   ["80 0 90 75",      "6 9 23 0",         "20 20 20 100",     "100 45 0 0"],
      "pms"   :   ["350",             "468",              "Black",            "2935"]
    }
  },
  {
    "name": "Minnesota Timberwolves",
    "league": "nba",
    "colors": {
      "rgb"   :   ["0 80 131",        "0 169 79",         "196 206 211",      "255 230 0",        "224 58 63",        "6 25 34"],
      "cmyk"  :   ["95 45 0 40",      "94 0 100 0",       "5 0 0 20",         "0 5 100 0",        "0 91 75 6",        "30 0 0 100"],
      "pms"   :   ["647",             "355",              "877",              "012",              "186",              "Black"]
    }
  },
  {
    "name": "New Orleans Pelicans",
    "league": "nba",
    "colors": {
      "rgb"   :   ["0 43 92",         "227 24 55",        "180 151 90"],
      "cmyk"  :   ["100 64 0 60",     "0 100 81 4",       "20 30 70 15"],
      "pms"   :   ["289",             "186",              "872"]
    }
  },
  {
    "name": "New York Knicks",
    "league": "nba",
    "colors": {
      "rgb"   :   ["0 107 182",       "245 132 38",       "190 192 194",      "35 31 32"],
      "cmyk"  :   ["100 56 0 0",      "0 59 96 0",        "0 0 0 29",         "30 0 0 100"],
      "pms"   :   ["293",             "165",              "Cool Gray 5",      "Black"]
    }
  },
  {
    "name": "Oklahoma City Thunder",
    "league": "nba",
    "colors": {
      "rgb"   :   ["0 125 195",       "240 81 51",        "253 187 48",       "0 45 98"],
      "cmyk"  :   ["89 43 0 0",       "0 84 88 0",        "0 29 91 0",        "100 68 0 54"],
      "pms"   :   ["285C",            "1788C",            "1235C",            "282C"]
    }
  },
  {
    "name": "Orlando Magic",
    "league": "nba",
    "colors": {
      "rgb"   :   ["0 125 197",       "196 206 211",      "6 25 34"],
      "cmyk"  :   ["100 40 0 0",      "5 0 0 20",         "30 0 0 100"],
      "pms"   :   ["2935",            "877",              "Black"]
    }
  },
  {
    "name": "Philadelphia 76ers",
    "league": "nba",
    "colors": {
      "rgb"   :   ["237 23 76",       "0 107 182",        "0 43 92",          "196 206 211"],
      "cmyk"  :   ["0 100 65 0",      "100 56 0 0",       "100 64 0 60",      "5 0 0 20"],
      "pms"   :   ["199",             "293",              "289",              "877"]
    }
  },
  {
    "name": "Phoenix Suns",
    "league": "nba",
    "colors": {
      "rgb"   :   ["229 96 32",       "29 17 96",         "99 113 122",       "249 160 27",       "185 89 21",        "190 192 194",      "6 25 34"],
      "cmyk"  :   ["0 75 100 5",      "98 100 0 43",      "15 0 0 65",        "0 43 100 0",       "0 67 100 28",      "0 0 0 29",         "30 0 0 100"],
      "pms"   :   ["159",             "275",              "431",              "137",              "1675",             "Cool Gray 5",      "Black"]
    }
  },
  {
    "name": "Portland Trail Blazers",
    "league": "nba",
    "colors": {
      "rgb"   :   ["224 58 62",       "186 195 201",      "6 25 34"],
      "cmyk"  :   ["0 91 76 6",       "5 0 0 25",         "30 0 0 100"],
      "pms"   :   ["186",             "877",              "Black"]
    }
  },
  {
    "name": "Sacramento Kings",
    "league": "nba",
    "colors": {
      "rgb"   :   ["114 76 159",      "142 144 144",      "6 25 34"],
      "cmyk"  :   ["65 82 0 0",       "46 37 38 2",       "30 0 0 100"],
      "pms"   :   ["266",             "877",              "Black"]
    }
  },
  {
    "name": "San Antonio Spurs",
    "league": "nba",
    "colors": {
      "rgb"   :   ["186 195 201",     "6 25 34"],
      "cmyk"  :   ["5 0 0 25",        "30 0 0 100"],
      "pms"   :   ["877",             "Black"]
    }
  },
  {
    "name": "Toronto Raptors",
    "league": "nba",
    "colors": {
      "rgb"   :   ["206 17 65",       "6 25 34",          "161 161 164",      "180 151 90"],
      "cmyk"  :   ["0 100 65 15",     "30 0 0 100",       "0 1 0 43",         "20 30 70 15"],
      "pms"   :   ["200",             "Black",            "Cool Gray 8",      "872"]
    }
  },
  {
    "name": "Utah Jazz",
    "league": "nba",
    "colors": {
      "rgb"   :   ["0 43 92",         "249 160 27",       "0 71 27",          "190 192 194"],
      "cmyk"  :   ["100 64 0 60",     "0 43 100 0",       "80 0 90 75",       "0 0 0 29"],
      "pms"   :   ["289",             "137",              "350",              "Cool Gray 5"]
    }
  },
  {
    "name": "Washington Wizards",
    "league": "nba",
    "colors": {
      "rgb"   :   ["0 43 92",         "227 24 55",        "196 206 212"],
      "cmyk"  :   ["100 64 0 60",     "0 100 81 4",       "5 0 0 20"],
      "pms"   :   ["289",             "186",              "877"]
    }
  }
]

  allTeams.forEach((team) => {
    allColors.forEach((color) => {
      if (team.fullName === color.name){
        team['colors'] = color.colors.rgb.map((color)=>{
          return `rgba(${color.split(' ').join(', ')}, 0.2)`
        })
      }
    })
  })

  allPlayers.forEach(function(player){
    for (var x = 0; x < allTeams.length; x++){
      if (parseInt(player.teamId) === parseInt(allTeams[x].teamId)) {
        player['team'] = allTeams[x].nickname
        player['colors'] = allTeams[x].colors
      }
    }
    var urlF = player.firstName.split('.').join('')
    if (urlF.includes("'")){
      urlF = urlF.replace("'", '')
    }
    var urlL = player.lastName.split("'").join('')
    if (urlL.includes(' Jr.')){
      urlL = urlL.replace(' Jr.', '_jr')
    }
    urlL = urlL.split(' ').join('')
    if (urlL.includes("'")){
      urlL = urlL.replace("'", '')
    }
    if (player.firstName === 'Matt' && player.lastName === 'Williams Jr.'){
      urlL = 'Williams'
    }
    player['urlL'] = urlL
    player['urlF'] = urlF
    if (player.firstName === 'Zhou Qi'){
      player['image'] = `https://nba-players.herokuapp.com/players/qi`
    } else if (!player.lastName){
      player['image'] = `https://nba-players.herokuapp.com/players/${urlF}`
    } else {
      player['image'] = `https://nba-players.herokuapp.com/players/${urlL}/${urlF}`
    }
  })

    this.setState({teams: allTeams}, ()=>{
      console.log(this.state.teams)
    })
    this.setState({players: allPlayers})
  }

  render() {

    return (
        <div>
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
                <BoxScore {...props} teams={this.state.teams} players={this.state.players}/>
                </div>
              )
            }}
            />
            <Route path='/playerprofile/:last/:first'
            render={(props) => {
              return (
                <div>
                <Home {...props} teams={this.state.teams} />
                <PlayerProfile {...props} teams={this.state.teams} players={this.state.players}/>
                </div>
              )
            }}
            />
            <Route path='/playermash'
            render={(props) => {
              return (
                <div>
                <Home {...props} teams={this.state.teams} />
                <PlayerMash {...props} teams={this.state.teams} players={this.state.players}/>
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
