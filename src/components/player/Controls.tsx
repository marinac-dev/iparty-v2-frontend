import React from "react";
import { Icon } from "./Icon";
interface Props {}

export const Controls: React.FC<Props> = () => {
  return (
    <div className="flex flex-col w-11/12 justify-center items-center z-10 absolute bottom-0 mb-2">
      {/* Row 1 */}
      <div className="flex justify-between w-full controls2 my-2 ">
        {/* <!-- Left side --> */}
        <div className="flex justify-center items-center p-2 rounded-lg ios-bg">
          {/* <!-- Prev video --> */}
          <Icon><i className="far fa-lg fa-backward"></i></Icon>
          {/* <!-- Next video --> */}
          <Icon><i className="far fa-lg fa-forward"></i> </Icon>
        </div>

        {/* <!-- Right side --> */}
        <div className="flex justify-between items-center p-2 rounded-lg ios-bg">
          {/* <!-- Mute|Unmute button --> */}
          <Icon><i className="fal fa-volume fa-lg" id="mute_btn"></i></Icon>
          {/* <!-- Volum slider --> */}
          <div className="volume_slider">
            <input type="range" min="0" max="100" step="1" className="range-bar" id="volume-bar" />
          </div>
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex flex-row w-full justify-evenly items-center rounded-lg p-2 controls1 ios-bg">
        {/* <!-- Back 15s --> */}
        <Icon><i className="far fa-lg fa-undo" id="seek_back" title="Seek 15s back"></i></Icon>
        {/* <!-- Play | Pause --> */}
        <Icon><i className="fas fa-lg fa-play" id="play_icon" title="Play/Pause video"></i></Icon>
        {/* <!-- Forward 15s --> */}
        <Icon><i className="far fa-lg fa-redo" id="seek_forw" title="Seek 15s forward"></i></Icon>
        {/* <!-- Current time --> */}
        <span id="current-time" className="text-gray-200" title="Current time">0:00</span>
        {/* <!-- Progress slider --> */}
        <div className="progress_slider">
          <input type="range" min="1" max="100" value="0" step="0.1" className="range-bar" id="progress-bar" />
        </div>

        {/* <!-- Total time --> */}
        <span id="duration" className="text-gray-200" title="Video duration">0:00</span>
        {/* <!-- Repeat video --> */}
        <Icon><i className="fal fa-repeat fa-lg" id="loop_video" title="Loop video"></i></Icon>
        {/* <!-- Settings button --> */}
        <Icon><i className="fal fa-cog fa-lg" title="Video settings"></i></Icon>
      </div>
    </div>
  );
};
