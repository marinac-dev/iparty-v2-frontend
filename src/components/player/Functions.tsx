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
Functions.repeatVideo = (): void => {};
Functions.showSettings = (): void => {};

Functions.formatTime = (value: number): string => {
  value = Math.round(value);
  var time = Math.floor(value / 60);
  let n: number | string = value - 60 * time;
  return time + ":" + (n = n < 10 ? "0" + n : n);
};

export default Functions;
