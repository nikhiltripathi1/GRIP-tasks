import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import UsersList from "./components/users-list";
import TransactionsList from "./components/transactions-list";
import Transfer from "./components/create-transfer";

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Navbar} />
        <Route path="/users" component={UsersList} />
        <Route path="/transactions" component={TransactionsList} />
        <Route path="/transfer" component={Transfer} />
      </div>
    </Router>
  );
}

export default App;
