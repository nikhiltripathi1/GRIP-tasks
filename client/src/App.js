import React from "react";
import { Route } from "react-router-dom";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Users from "./components/users";
import TransactionsList from "./components/transactions-list";
import Transfer from "./components/create-transfer";
import Home from "./components/homepage";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/transactions" component={TransactionsList} />
      <Route path="/transfer" component={Transfer} />
    </div>
  );
}

export default App;
