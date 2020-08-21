import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./BottomNav.css";

class BottomNav extends React.Component {
  render() {
    return (
      <>
        <div className="d-none1">
          <ul className="ul">
            <div className="row" style={{ textDecoration: "none" }}>
              <li>
                <Link to="paycheck">
                  <i
                    class="far fa-clock"
                    style={{  textDecoration: "none" }}
                  ></i>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <i
                    class="fas fa-home"
                    style={{  textDecoration: "none" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="messeges">
                  <i
                    class="fab fa-facebook-messenger"
                    style={{  textDecoration: "none" }}
                  ></i>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </>
    );
  }
}

export default BottomNav;
