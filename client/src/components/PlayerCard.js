import React from "react";

export default function PlayerCard(props) {
    console.log(props)

    return(
        <div>
            <div className="card">
                <h3>Name:{props.player.name}</h3>
                <h3>Country:{props.player.country}</h3>
                <h3>Ranking: #{props.player.id}</h3>
            </div>
        </div>
    )
}