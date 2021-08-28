import React, { useEffect } from "react";

import { Player } from "./Player";
import { Search } from "./Search";

interface Props {}

export const IPartyPlayer: React.FC<Props> = () => {
  return (
    <div className="iparty">
      {/* Player & Search */}
      <div className="player-and-search ios-bg-clear">
        <Player />
        {/* <Search /> */}
        <Search />
      </div>
      {/* PlayList */}
    </div>
  );
};
