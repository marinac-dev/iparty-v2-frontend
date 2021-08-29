import React from "react";
import { Icon } from "./Icon";

import Functions from "./Functions";
import { VolumeSlider } from "./VolumeSlider";

interface Props {
  player: any;
  playing: boolean;
  duration: number;
  currentTime: number;
  soundLevel: number;
  setSoundLevel: any;
  loopVideo: boolean;
  setLoopVideo: any;
}

export const Controls: React.FC<Props> = ({
  player,
  playing,
  duration,
  currentTime,
  soundLevel,
  setSoundLevel,
  loopVideo,
  setLoopVideo,
}) => {
  const playPause = (): void => {
    Functions.playPause(player);
  };
  const prevVideo = (): void => {
    console.log("Prev video");
    // Functions.prevVideo();
  };
  const nextVideo = (): void => {
    console.log("Next video");
    // Functions.nextVideo();
  };
  const muteVideo = (): void => {
    Functions.muteVideo(player);
  };
  const seekBack = (): void => {
    player.seekTo(player.getCurrentTime() - 15, true);
  };
  const seekForward = (): void => {
    player.seekTo(player.getCurrentTime() + 15, true);
  };
  const repeatVideo = (): void => {
    console.log("Repeat video");
    // Functions.repeatVideo()
  };
  const showSettings = (): void => {
    console.log("Show settings");
    // Functions.showSettings()
  };

  const _handleVolumeSlider = (event: any): void => {
    const volume = event.target.value;
    setSoundLevel(volume);
    player.setVolume(volume);
  };

  return (
    <div className="controls">
      {/* Row 1 */}
      <div className="row-1">
        {/* Left side */}
        <div className="sub-menu ios-bg">
          {/* Prev video */}
          <Icon clickHandler={prevVideo} title="Previous">
            <i className="far fa-lg fa-backward"></i>
          </Icon>
          {/* Next video */}
          <Icon clickHandler={nextVideo} title="Next">
            <i className="far fa-lg fa-forward"></i>
          </Icon>
        </div>

        {/* Right side */}
        <div className="sub-menu ios-bg">
          {/* Mute|Unmute button */}
          <Icon clickHandler={muteVideo} title="Mute">
            <i className="fal fa-volume fa-lg" id="mute_btn"></i>
          </Icon>
          {/* Volum slider */}
          <VolumeSlider soundLevel={soundLevel} handleCallback={_handleVolumeSlider} />
        </div>
      </div>
      {/* Row 2 */}
      <div className="row-2 ios-bg">
        {/* Back 15s */}
        <Icon clickHandler={seekBack} title="Seek 15s back">
          <i className="far fa-lg fa-undo"></i>
        </Icon>
        {/* Play | Pause */}
        <Icon clickHandler={playPause} title="Play/Pause video">
          {playing === false ? <i className="fad fa-lg fa-play"></i> : <i className="fad fa-lg fa-pause"></i>}
        </Icon>
        {/* Forward 15s */}
        <Icon clickHandler={seekForward} title="Seek 15s forward">
          <i className="far fa-lg fa-redo"></i>
        </Icon>
        {/* Current time */}
        <span className="text-gray-200" title="Current time">
          {Functions.formatTime(currentTime)}
        </span>
        {/* Progress slider */}
        <div className="progress_slider">
          <input type="range" min={1} value={1} max={duration} step={0.1} />
        </div>

        {/* Total time */}
        <span id="duration" className="text-gray-200" title="Video duration">
          {Functions.formatTime(duration)}
        </span>
        {/* Repeat video */}
        <Icon clickHandler={repeatVideo} title="Loop video">
          <i className="fal fa-repeat fa-lg"></i>
        </Icon>
        {/* Settings button */}
        <Icon clickHandler={showSettings} title="Video settings">
          <i className="fal fa-cog fa-lg"></i>
        </Icon>
      </div>
    </div>
  );
};
