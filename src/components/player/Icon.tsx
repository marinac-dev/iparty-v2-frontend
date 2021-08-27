import React from "react";
interface Props {}
export const Icon: React.FC<Props> = ({ children }) => {
  return <div className="icon">{children}</div>;
};
