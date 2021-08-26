import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Session: React.FC<Props> = () => {
  return (
    <div className="flex items-center justify-end">
      <Link className="sign-up" to="/">
        Sign up <i className="fal fa-user-plus"></i>
      </Link>
      <Link className="sign-in" to="/">
        Sign in <i className="fal fa-sign-in-alt"></i>
      </Link>
    </div>
  );
};
