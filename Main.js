import React, { Component } from "react";
 import {
     Route, Routes,
     NavLink,
     HashRouter
 } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Animals from "./animals";
 class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Project</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/animals">Animals</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/animals" element={<Animals />}/>
              <Route path="/contact" element={<Contact />}/>
              </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Main;