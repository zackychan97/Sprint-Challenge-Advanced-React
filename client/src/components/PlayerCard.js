import React from "react";

export default function PlayerCard(props){
    console.log(props)

    return(
        <div>
            <div className= "card">
            <h3>Player Rank: {props.player.id}</h3>
            <h3>Name: {props.player.id}</h3>
            <h3>Country: {props.player.country}</h3>
            </div>
        </div>
    )
}