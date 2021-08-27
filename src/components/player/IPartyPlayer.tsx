import React, { useEffect } from "react";

import { Player } from "./Player";

interface Props {}

export const IPartyPlayer: React.FC<Props> = () => {
  return (
    <div className="iparty">
      {/* Player & Search */}
      <div className="player-and-search ios-bg-clear">
        <Player />
        {/* <Search /> */}
      </div>
      {/* PlayList */}
    </div>
  );
};
