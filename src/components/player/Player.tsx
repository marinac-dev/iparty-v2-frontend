import React from "react";

import YouTube from "react-youtube";
import Config from "../../config";
import { Controls } from "./Controls";

interface Props {}
export const Player: React.FC<Props> = () => {
  return (
    <div className="wrapper">
      <div className="player" id="player_awning" data-content="">
        {/* <!-- Video player --> */}
        <YouTube className="w-full pointer-events-none" videoId={Config.PlayerOpts.videoId} opts={Config.PlayerOpts.opts}/>
        {/* <!-- Controls --> */}
        <Controls />   
      </div>
    </div>
  );
};
