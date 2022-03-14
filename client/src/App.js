import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Sidebar,
  Home,
  About,
  Experiences,
  Contact,
  Skills,
} from "./Components";
import "./App.css";
import NewContact from "./Components/NewContact";
import {BsFillArrowUpSquareFill}  from "react-icons/bs";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Page />} />
          <Route path="contact" element={<NewContact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

class Page extends Component {
  render() {
    return (
      <div>
        <div className="bg-image"></div>
        <div className="bg-opacity"></div>
        <div>
          <Sidebar />
          <div className="new-main">
            <Home />
            <About />
            <Skills />
            <Experiences />
            <a href="#">
              <BsFillArrowUpSquareFill className="top-arrow" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
