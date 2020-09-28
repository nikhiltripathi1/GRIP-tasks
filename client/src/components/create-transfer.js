import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Alert,
} from "reactstrap";
import Navbar from "./navbar";

export default class Transfer extends Component {
  state = {
    username: "Sent To",

    dropdownOpen: false,
    error: false,
    redirect: false,
    amount: "",
    users: [],
  };

  componentDidMount() {
    axios
      .get("/users")
      .then((response) => {
        // console.log(response);
        this.setState({ users: response.data });
      })
      .catch((error) => console.log("The error is", error));
  }
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  toggleDropDown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  findSender = () => {
    const senderID = window.location.href.split("/");
    const sID = senderID[senderID.length - 1];
    const sender = this.state.users.filter((user) => {
      return user._id === sID;
    });
    return sender;
  };
  onSubmit = (e) => {
    e.preventDefault();

    const id = this.state.users.filter((user) => {
      return user.username === this.state.username;
    });
    console.log(id[0]._id);
    const sender = this.findSender();
    if (sender[0].credits >= this.state.amount) {
      const transaction = {
        sentBy: sender[0].username,
        sentTo: this.state.username,
        credits: this.state.amount,
      };
      axios
        .post("/transfer/" + sender[0]._id + "/" + id[0]._id, transaction)
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error"));

      axios
        .put("/transfer/" + sender[0]._id + "/" + id[0]._id, transaction)
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error"));
      setTimeout(() => {
        alert("Transfer successful");
      });
      this.setState({ redirect: true });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    if (!this.state.redirect) {
      this.findSender();
      return (
        <div>
          <Navbar />
          <div className="container">
            <h4 style={{ margin: "1rem auto" }}>Transfer Credits</h4>
            {this.state.error ? (
              <Alert color="danger">Not Enough Credits</Alert>
            ) : null}
            <form onSubmit={this.onSubmit}>
              <InputGroup>
                <Input value={this.state.username} readOnly />
                <InputGroupButtonDropdown
                  addonType="append"
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggleDropDown}
                >
                  <DropdownToggle caret>Sent To</DropdownToggle>
                  <DropdownMenu>
                    {" "}
                    {this.state.users.map((user) => {
                      return (
                        <DropdownItem
                          key={user._id}
                          id="username"
                          onClick={this.onChange}
                          value={user.username}
                        >
                          {user.username}
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </InputGroupButtonDropdown>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">Credits</InputGroupAddon>
                <Input
                  type="number"
                  min={1}
                  onChange={this.onChange}
                  id="amount"
                />
              </InputGroup>
              <br />
              <Button type="submit" style={{ width: "100%" }}>
                Transfer
              </Button>
            </form>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/transactions" />;
    }
  }
}
