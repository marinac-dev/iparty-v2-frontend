import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import { IPartyPlayer } from "./player/IPartyPlayer";
import { IPartyRoom } from "./party_room/IPartyRoom";
// Assets
import logo from "../assets/logo.png";
import { Navbar } from "./navbar/Navbar";
import { Session } from "./navbar/Session";

export const App = () => {
  return (
    <main className="container mx-auto">
      <Router>
        <header className="header ios-bg-clear">
          <Link to="/"><img src={logo} alt="iParty logo" className="h-12" /></Link>

          <nav className="navbar">
            {/* Site navivation */}
            <Navbar />
            {/* Session */}
            <Session />
          </nav>
        </header>

        {/* Routes */}
        <Switch>
          <Route path="/player"><IPartyPlayer /></Route>
          <Route path="/party_room"><IPartyRoom /></Route>
          <Route path="/sign-in"></Route>
          <Route path="/sign-up"></Route>
        </Switch>
      </Router>
    </main>
  );
};
