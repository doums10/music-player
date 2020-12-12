import React, { useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Is This Love",
      artist: "Bob Marley",
      img_src: "./images/Bob.jpeg",
      src: "./music/Bob Marley - Is This Love.mp3",
    },
    {
      title: "Lose This",
      artist: "Dylan Emmet",
      img_src: "./images/dylan emmet.jpeg",
      src: "./music/Lose This – Dylan Emmet.mp3",
    },
    {
      title: "LURK (Prod. Malice Beats)",
      artist: "C1 x Kwengface",
      img_src: "./images/Lurk drill.jpeg",
      src: "./music/C1 x Kwengface Type Beat - LURK (Prod. Malice Beats).mp3",
    },
    {
      title: "Journey",
      artist: "Declan DP",
      img_src: "./images/journey",
      src: "./music/Journey – Declan DP.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player 
      song={songs[currentSongIndex]} 
      nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
