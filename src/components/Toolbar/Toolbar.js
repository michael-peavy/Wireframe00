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
        
        <a href="/">  paylocity</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        {/* <Router> */}
          <ul>
            <Link to="/">
              <li>home</li>
            </Link>



            <Link to="/login">
              <li>Login</li>
            </Link>

            <Link to='messeges'>
            <li className="d-none">Messages</li>
            </Link>

            <Link to='paycheck'>
            <li className="d-none">Paycheck</li>
            </Link>



          </ul>
        {/* </Router> */}
      </div>
    </nav>
  </header>
);

export default Toolbar;