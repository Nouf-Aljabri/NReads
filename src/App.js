import React, { Component } from "react";
import { Routes , Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
   
    }

  render() {
   
    return (
      <div>
<Routes>
  <Route exact path="/" element={<HomePage/>} />
  <Route  path="/SearchPage" element={<SearchPage />} />
</Routes>
      </div>
    );
  }
}
