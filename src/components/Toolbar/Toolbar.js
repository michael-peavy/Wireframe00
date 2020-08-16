import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import "./Toolbar.css";

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        
        <a href="/">  PAYLOCITY</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        <Router>
          <ul>
            <li>Home</li>

            <Link to="/login">
              <li>Login</li>
            </Link>

            <li className="d-none">Messages</li>
          </ul>
        </Router>
      </div>
    </nav>
  </header>
);

export default Toolbar;
