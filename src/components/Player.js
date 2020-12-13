import React { useEffect, useRef, useState } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props) {

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  //paramétrage lecture des sons
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  //paramétrage changement de sons forward
  const SkipSong = (forwards = true) => {
    if(forwards) {
     props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }
        return temp;
     });
     //paramétrage backward
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  }
  
  return (
    <div className="c-player">
      <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
      <h4>Playing Now</h4>
      {/*DETAILS*/}
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      {/*CONTROLS*/}
						<PlayerControls />
      <p>
        Next up:
        <strong> {props.nextSong.title} by {props.nextSong.artist}
        </strong>
      </p>
    </div>
  );
}

export default Player;
