import React from 'react';
import axios from "axios";
import './App.css';

//component imports will go below when finished making them, gonna make a PlayerCard and a Navbar. Will call for them now I am gonna build out app js
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/Navbar"


class App extends React.Component{
  //need state
  state = {
    player: [],
  }

  componentDidMount(){
    //need our axios
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res =>{
      console.log(` the axios call returned:`, res.data)
      console.log(`res.data type is:`, typeof res.data)

      this.setState({
        player: res.data
      })
    })
  }
  render(){
    console.log(this.state.player)
    return (
      <div>
        <Navbar />
        <header>
          <h1>Testing, attention please!</h1>
          <div>
            {this.state.player.map((player, key) => {
              console.log(player);
              return <PlayerCard key = {key} player = {player} />
            })}
          </div>
        </header>
      </div>
    )
  }
}

export default App;
