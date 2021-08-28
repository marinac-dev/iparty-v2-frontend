import React from "react";

interface Props {
  soundLevel: number;
  handleCallback: any;
}

export const VolumeSlider: React.FC<Props> = ({ soundLevel, handleCallback }) => {
  return (
    <input type="range" min={0} step={1} max={100} value={soundLevel} className="range-bar" onInput={handleCallback} />
  );
};
