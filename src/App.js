import React, { useState } from "react";
import Player from "./components/Player";

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

const [currentSong, setCurrentSong] = useState(0);
const [nextSong, setNextSong] = useState(currentSong + 1);

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Player  
      {songs[currentSong]}
      {nextSong[nextSong]}
      />
    </div>
  );
}

export default App;
