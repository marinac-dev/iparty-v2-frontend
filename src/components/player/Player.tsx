import React, { useState } from "react";

import YouTube from "react-youtube";
import Config from "../../Config";
import { Controls } from "./Controls";

interface Props {}
export const Player: React.FC<Props> = () => {
  const [player, setPlayer] = useState<HTMLInputElement>();

  function _onReady(event: { target: HTMLInputElement }) {
    setPlayer(event.target);
  }

  return (
    <div className="wrapper">
      <div className="player" id="player_awning" data-content="">
        {/* <!-- Video player --> */}
        <YouTube containerClassName="video" onReady={_onReady} videoId={Config.PlayerOpts.videoId} opts={Config.PlayerOpts.opts}/>
        {/* <!-- Controls --> */}
        <Controls player={player} />
      </div>
    </div>
  );
};
