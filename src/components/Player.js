import React from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props) {
  return (
    <div className="c-player">
      <audio src=""></audio>
      <h4>Playing Now</h4>
      {/*DETAILS*/}
      <PlayerDetails song={props.song} />
      {/*CONTROLS*/}
						<PlayerControls />
      <p>
        Next up:
        <strong>
          {props.nextSong.title} by {props.nextSong.artist}
        </strong>
      </p>
    </div>
  );
}

export default Player;
