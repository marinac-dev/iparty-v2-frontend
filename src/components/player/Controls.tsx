import React from "react";
import { Icon } from "./Icon";

interface Props {
  player: any;
}

export const Controls: React.FC<Props> = ({ player }) => {
  const playPause = (): void => {
    let state = player.getPlayerState();
    switch (state) {
      case -1:
        player.pauseVideo();
        break;
      case 1:
        player.pauseVideo();
        break;
      default:
        player.playVideo();
    }
  };

  return (
    <div className="controls">
      {/* Row 1 */}
      <div className="row-1">
        {/* <!-- Left side --> */}
        <div className="sub-menu ios-bg">
          {/* <!-- Prev video --> */}
          <Icon clickHandler={playPause}>
            <i className="far fa-lg fa-backward"></i>
          </Icon>
          {/* <!-- Next video --> */}
          <Icon clickHandler={playPause}>
            <i className="far fa-lg fa-forward"></i>{" "}
          </Icon>
        </div>

        {/* <!-- Right side --> */}
        <div className="sub-menu ios-bg">
          {/* <!-- Mute|Unmute button --> */}
          <Icon clickHandler={playPause}>
            <i className="fal fa-volume fa-lg" id="mute_btn"></i>
          </Icon>
          {/* <!-- Volum slider --> */}
          <div className="volume_slider">
            <input type="range" min="0" max="100" step="1" className="range-bar" id="volume-bar" />
          </div>
        </div>
      </div>
      {/* Row 2 */}
      <div className="row-2 ios-bg">
        {/* <!-- Back 15s --> */}
        <Icon clickHandler={playPause} title="Seek 15s back">
          <i className="far fa-lg fa-undo"></i>
        </Icon>
        {/* <!-- Play | Pause --> */}
        <Icon clickHandler={playPause} title="Play/Pause video">
          <i className="fad fa-lg fa-play"></i>
        </Icon>
        {/* <!-- Forward 15s --> */}
        <Icon clickHandler={playPause} title="Seek 15s forward">
          <i className="far fa-lg fa-redo"></i>
        </Icon>
        {/* <!-- Current time --> */}
        <span id="current-time" className="text-gray-200" title="Current time">
          0:00
        </span>
        {/* <!-- Progress slider --> */}
        <div className="progress_slider">
          <input type="range" min="1" max="100" defaultValue={0} step="0.1" className="range-bar" id="progress-bar" />
        </div>

        {/* <!-- Total time --> */}
        <span id="duration" className="text-gray-200" title="Video duration">
          0:00
        </span>
        {/* <!-- Repeat video --> */}
        <Icon clickHandler={playPause} title="Loop video">
          <i className="fal fa-repeat fa-lg"></i>
        </Icon>
        {/* <!-- Settings button --> */}
        <Icon clickHandler={playPause} title="Video settings">
          <i className="fal fa-cog fa-lg"></i>
        </Icon>
      </div>
    </div>
  );
};
