import React, { Component } from "react";
import axios from "axios";

import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Transaction = (props) => (
  <tr>
    <td>{props.transaction.sentBy}</td>
    <td>{props.transaction.sentTo}</td>
    <td>{props.transaction.credits}</td>
    <td>{props.transaction.date.slice(2, 10)}</td>
  </tr>
);

export default class TransactionsList extends Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }
  componentDidMount() {
    axios
      .get("/transactions")
      .then((response) => {
        this.setState({ transactions: response.data });
      })
      .catch((error) => console.log("The error is", error));
  }

  transactionList() {
    return this.state.transactions.map((currenttransaction) => {
      return (
        <Transaction
          transaction={currenttransaction}
          key={currenttransaction._id}
        />
      );
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h3 style={{ margin: "1rem auto" }}>All Transactions Logs</h3>
          <table className="table">
            <thead style={{ background: "#E71D36", color: "white" }}>
              <tr>
                <th>Sender</th>
                <th>Receiver </th>
                <th>Credits</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>{this.transactionList()}</tbody>
          </table>
        </div>
      </>
    );
  }
}
