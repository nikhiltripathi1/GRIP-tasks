import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div style={{ background: "#F1FCF8", height: "92vh" }}>
          <div
            className="container"
            style={{ textAlign: "center", paddingTop: "3rem" }}
          >
            <h1 className="display-4">Welcome</h1>
            <h3>The Sparks Foundation</h3>
            <hr />
            <h4>Credit Transfer App</h4>
            <h6>By Nikhil Tripathi</h6>
            <Link to="/users-list">
              <button
                style={{
                  background: "#E71D36",
                  width: "40%",
                  padding: "1rem",
                  marginTop: "1rem",
                  color: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                }}
              >
                See All users
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
