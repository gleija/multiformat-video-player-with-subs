import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);
  const [subtitle, setSubtitle] = useState("");

  return (
    <div className="App">
      <VideoPlayer
        src="http://ns379011.ip-5-196-69.eu/fishstory/FishStory.m4v"
        subtitles={{
          src: "http://ns379011.ip-5-196-69.eu/vid/subs/lashistoriadelpez.vtt",
          language: "en",
        }}
      />
    </div>
  );
}

export default App;
