import React from "react";
import { Route } from "react-router-dom";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Users from "./components/users";
import TransactionsList from "./components/transactions";
import Transfer from "./components/transfers";
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
