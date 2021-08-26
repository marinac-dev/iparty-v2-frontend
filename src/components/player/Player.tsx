import React from "react";

interface Props {}
export const Player: React.FC<Props> = () => {
  return (
    <div className="flex justify-center items-center w-full lg:w-2/3" id="ytp" phx-hook="YoutubePlayer" phx-update="ignore">
      <div className="flex flex-col w-full lg:w-3/4 items-center justify-center shadow-md rounded-md overflow-hidden relative" id="player_awning" data-content="">
        {/* <!-- Video player --> */}
        <div className="w-full pointer-events-none" id="video_player"></div>

        {/* <!-- Controls --> */}
        <div className="flex flex-col w-11/12 justify-center items-center z-10 absolute bottom-0 mb-2">
          {/* <!-- Controls row 1 --> */}
          <div className="flex justify-between w-full controls2 my-2 ">
            {/* <!-- Left side --> */}
            <div className="flex justify-center items-center p-2 rounded-lg ios-bg">
              {/* <!-- Prev video --> */}
              <span className="icon">
                <i className="far fa-lg fa-backward"></i>
              </span>
              {/* <!-- Next video --> */}
              <span className="icon">
                <i className="far fa-lg fa-forward"></i>
              </span>
            </div>

            {/* <!-- Right side --> */}
            <div className="flex justify-between items-center p-2 rounded-lg ios-bg">
              {/* <!-- Mute|Unmute button --> */}
              <span className="icon">
                <i className="fal fa-volume fa-lg" id="mute_btn"></i>
              </span>
              {/* <!-- Volum slider --> */}
              <div className="volume_slider">
                <input type="range" min="0" max="100" step="1" className="range-bar" id="volume-bar" />
              </div>
            </div>
          </div>

          {/* <!-- Controls row 2 --> */}
          <div className="flex flex-row w-full justify-evenly items-center rounded-lg p-2 controls1 ios-bg">
            {/* <!-- Back 15s --> */}
            <span className="icon">
              <i className="far fa-lg fa-undo" id="seek_back" title="Seek 15s back"></i>
            </span>

            {/* <!-- Play | Pause --> */}
            <span className="icon" id="play_button">
              <i className="fas fa-lg fa-play" id="play_icon" title="Play/Pause video"></i>
            </span>

            {/* <!-- Forward 15s --> */}
            <span className="icon">
              <i className="far fa-lg fa-redo" id="seek_forw" title="Seek 15s forward"></i>
            </span>

            {/* <!-- Current time --> */}
            <span id="current-time" className="text-gray-200" title="Current time">
              0:00
            </span>

            {/* <!-- Progress slider --> */}
            <div className="progress_slider">
              <input type="range" min="1" max="100" value="0" step="0.1" className="range-bar" id="progress-bar" />
            </div>

            {/* <!-- Total time --> */}
            <span id="duration" className="text-gray-200" title="Video duration">
              0:00
            </span>

            {/* <!-- Repeat video --> */}
            <span className="icon">
              <i className="fal fa-repeat fa-lg" id="loop_video" title="Loop video"></i>
            </span>

            {/* <!-- Settings button --> */}
            <span className="icon" id="settings_icon">
              <i className="fal fa-cog fa-lg" title="Video settings"></i>
            </span>

            {/* <!-- Settings menu --> */}
            <div
              id="settings_options"
              className="hidden flex-col items-center justify-center absolute right-0 bottom-0 p-2 mb-16 rounded-lg ios-bg"
            >
              <span className="text-center text-gray-400">Speed</span>
              <ul className="list-none h-24 overflow-auto text-gray-200">
                <li className="hover:bg-gray-900 hover:text-gray-100 mx-0 my-1 px-2 w-full cursor-pointer">x0.25</li>
                <li className="hover:bg-gray-900 hover:text-gray-100 mx-0 my-1 px-2 w-full cursor-pointer">x0.5</li>
                <li className="hover:bg-gray-900 hover:text-gray-100 mx-0 my-1 px-2 w-full cursor-pointer">x0.75</li>
                <li className="hover:bg-gray-900 hover:text-gray-100 mx-0 my-1 px-2 w-full cursor-pointer">Normal</li>
                <li className="hover:bg-gray-900 hover:text-gray-100 mx-0 my-1 px-2 w-full cursor-pointer">x1.25</li>
                <li className="hover:bg-gray-900 hover:text-gray-100 mx-0 my-1 px-2 w-full cursor-pointer">x1.5</li>
                <li className="hover:bg-gray-900 hover:text-gray-100 mx-0 my-1 px-2 w-full cursor-pointer">x1.75</li>
                <li className="hover:bg-gray-900 hover:text-gray-100 mx-0 my-1 px-2 w-full cursor-pointer">x2.0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
