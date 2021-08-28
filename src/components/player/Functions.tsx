const Functions: any = {};

Functions.playPause = (player: any): void => {
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
Functions.prevVideo = (): void => {};
Functions.nextVideo = (): void => {};

Functions.muteVideo = (player: any): void => {
  if (player.isMuted() == true) {
    player.unMute();
    // sound_icon("unmuted");
  } else {
    player.mute();
    // sound_icon("muted");
  }
};

Functions.seekBack = (): void => {};
Functions.seekForward = (): void => {};
Functions.repeatVideo = (): void => {};
Functions.showSettings = (): void => {};

export default Functions;
