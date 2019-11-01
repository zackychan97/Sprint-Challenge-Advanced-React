import React, { Component } from "react";
import axios from "axios";

class Players extends Component {
  // isMounted is initially set to fale -- https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component
  _isMounted = false;
  state = { playerData: [] };

  componentDidMount() {
    // When component mounts, set the boolean to true, and only when this is true can the axios call run
    this._isMounted = true;
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        if (this._isMounted) {
          this.setState({ playerData: response.data });
          //   console.log(this.state.playerData);
        }
      })
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    // When it unmounts, no longer allows the axios to run
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <h1>Women's World Cup</h1>
        <div className="player-container">
          {this.state.playerData.map(player => (
            <div className="player-card" key={player.id}>
              <h1>{player.name}</h1>
              <h3>{player.country}</h3>
              <p>Searches: {player.searches}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Players;