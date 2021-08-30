import React, { useState, useRef } from "react";

import YouTube from "react-youtube";
import Config from "../../Config";
import { Controls } from "./Controls";

interface Props {}
export const Player: React.FC<Props> = () => {
  const timeIntervalRef = useRef<any>();

  const [player, setPlayer] = useState();
  const [playing, setPlaying] = useState(false);
  const [songName, setSongName] = useState<string>("");
  const [loopVideo, setLoopVideo] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [soundLevel, setSoundLevel] = useState<number>(0);

  const newInterval = (player: any): void => {
    clearInterval(timeIntervalRef.current);

    timeIntervalRef.current = setInterval(() => {
      const currentTime: number = player.getCurrentTime();
      const duration: number = player.getDuration();
      setCurrentTime(currentTime);
      setDuration(duration);
    }, 1000 / 80);
  };

  const _onReady = (event: { target: any }) => {
    const player = event.target;
    // Set (expose) player
    setPlayer(player);
    // Update name
    setSongName(player.getVideoData().title);
    // Sync sound
    setSoundLevel(100);
    // Start time interval
    newInterval(player);
  };

  const _onStateChange = (event: { target: any; data: number }): void => {
    const player = event.target;

    switch (event.data) {
      // Unstarted
      case -1:
        setSongName(player.getVideoData().title);
        setPlaying(false);
        break;

      // Ended
      case 0:
        loopVideo == true ? player.playVideo() : console.log("Play next");
        setPlaying(false);
        break;

      // Playing
      case 1:
        newInterval(player);
        setPlaying(true);
        break;

      // Paused
      case 2:
        setPlaying(false);
        break;

      // buffering
      case 3:
        break;

      // video cued
      case 5:
        break;

      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <div className="player" id="player_awning" data-content={songName}>
        {/* YoutTube api iframe */}
        <YouTube
          containerClassName="video"
          onReady={_onReady}
          onStateChange={_onStateChange}
          videoId={Config.PlayerOpts.videoId}
          opts={Config.PlayerOpts.opts}
        />

        {/* Video controls */}
        <Controls
          player={player}
          playing={playing}
          duration={duration}
          currentTime={currentTime}
          soundLevel={soundLevel}
          setSoundLevel={setSoundLevel}
          loopVideo={loopVideo}
          setLoopVideo={setLoopVideo}
          timeInterval={timeIntervalRef}
          timeIntervalCb={newInterval}
        />
      </div>
    </div>
  );
};
