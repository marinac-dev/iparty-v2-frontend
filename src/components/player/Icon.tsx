import React from "react";
interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
}
export const Icon: React.FC<Props> = ({ clickHandler, title, children }) => {
  return (
    <button className="icon" onClick={(event) => clickHandler(event)} title={title}>
      {children}
    </button>
  );
};
