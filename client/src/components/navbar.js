import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isCollapse: true,
  };
  toggle = () => {
    this.setState({ isCollapse: !this.state.isCollapse });
  };
  render() {
    return (
      <nav
        className="navbar navbar-dark navbar-expand-lg"
        style={{ background: "#011627" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            Credit Transfer App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggle}
            style={{ marginTop: "5px" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={
              (this.state.isCollapse ? "collapse" : "") + " navbar-collapse"
            }
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/transactions" className="nav-link">
                  Logs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
