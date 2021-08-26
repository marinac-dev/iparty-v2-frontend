import React from "react";
import { Link } from "react-router-dom";

interface Props {}
export const Navbar: React.FC<Props> = () => {
  return (
    <div className="iparty">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/player">
        iParty
      </Link>
      <Link className="nav-link" to="/">
        How to: iParties 101
      </Link>
      <Link className="nav-link" to="/">
        iParty - Party room
      </Link>

      <div className="group inline-block relative">
        <span className="flex flex-row items-center justify-center nav-link cursor-pointer">
          <span> More </span>
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>

        <ul className="group-hover:block absolute shadow hidden bg-gray-100 text-gray-900 pt-2 rounded-lg z-10">
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-200 rounded-t">
            <Link className="nav-link" to="/">
              FAQ
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-200 rounded-t">
            <Link className="nav-link" to="/">
              About
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-200 rounded-t">
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-200 rounded-t">
            <Link className="nav-link" to="/">
              TOS
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-200 rounded-t">
            <Link className="nav-link" to="/">
              Privacy policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
