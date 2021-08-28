import React, { useState, useRef } from "react";

import YouTube from "react-youtube";
import Config from "../../Config";
import { Controls } from "./Controls";

interface Props {}
export const Player: React.FC<Props> = () => {
  const timeIntervalRef = useRef();

  const [player, setPlayer] = useState();
  const [songName, setSongName] = useState<string>("");
  const [loopVideo, setLoopVideo] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [soundLevel, setSoundLevel] = useState<number>(0);
  const [updateInterval, setUpdateInterval] = useState(0);

  const formatTime = (value: number): string => {
    value = Math.round(value);
    var time = Math.floor(value / 60);
    let n: number | string = value - 60 * time;
    return time + ":" + (n = n < 10 ? "0" + n : n);
  };

  const initProgressBar = (player: any) => {
    const duration: number = player.getDuration();
    const progress: number = player.getCurrentTime();
    setDuration(duration);
    setProgress(progress);
  };

  const _onReady = (event: { target: any }) => {
    const player = event.target;
    // Set (expose) player
    setPlayer(player);
    // Update name
    setSongName(player.getVideoData().title);
    // Sync sound
    setSoundLevel(85);
    // Init timers
    // Init progress bar
  };

  const _onStateChange = (event: { target: any; data: number }): void => {
    const player = event.target;

    switch (event.data) {
      // Unstarted
      case -1:
        setSongName(player.getVideoData().title);
        break;

      // Ended
      case 0:
        loopVideo == true ? player.playVideo() : console.log("Play next");
        break;

      // Playing
      case 1:
        initProgressBar(player);
        break;

      // Paused
      case 2:
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <div className="player" id="player_awning" data-content={songName}>
        {/* <!-- Video player --> */}
        <YouTube
          containerClassName="video"
          onReady={_onReady}
          onStateChange={_onStateChange}
          videoId={Config.PlayerOpts.videoId}
          opts={Config.PlayerOpts.opts}
        />
        {/* <!-- Controls --> */}
        <Controls
          player={player}
          duration={duration}
          progress={progress}
          soundLevel={soundLevel}
          setSoundLevel={setSoundLevel}
          loopVideo={loopVideo}
        />
      </div>
    </div>
  );
};
