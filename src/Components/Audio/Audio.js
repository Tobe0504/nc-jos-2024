import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import audio from "../../Assets/Audio/Shivers.mp3";

const Audio = () => {
  // Context
  const { audioRef } = useContext(AppContext);

  return (
    <div>
      <button style={{ display: "none" }}>Click to play</button>
      <audio loop autoPlay ref={audioRef}>
        <source src={audio} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Audio;
