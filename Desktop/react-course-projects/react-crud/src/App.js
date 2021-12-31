import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './Navbar'
import Users from './Users'

export default function App(id) {
  return (
    <Router>
      <Navbar />
      <Users key={id} />
    </Router>
  );
}