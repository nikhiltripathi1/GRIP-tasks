import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
} from "reactstrap";

import Navbar from "./navbar";

class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios
      .get("/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => console.log("The error is", error));
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h4 style={{ margin: "1rem auto" }}>All Users</h4>
          <CardColumns>
            {this.state.users.map((user) => {
              return (
                <Card
                  body
                  inverse
                  style={{ background: "#2EC4B6" }}
                  key={user._id}
                >
                  <CardTitle>
                    <strong>Username: </strong>
                    {user.username}
                  </CardTitle>
                  <CardSubtitle>
                    <strong>Email: </strong>
                    {user.email}
                  </CardSubtitle>
                  <CardText>
                    <strong>Credits: </strong>
                    {user.credits}
                  </CardText>
                  <Link to={"/transfer/" + user._id}>
                    <Button style={{ width: "100%", background: "#0D424B" }}>
                      Transfer
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </CardColumns>
        </div>
      </>
    );
  }
}
export default Users;
