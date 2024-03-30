// components/Animals.js
import React, { Component } from "react";
 
class Animals extends Component {
  render() {
    return (
      <div>
        <h2>Animals</h2>
        <p>Here is a list of different animals</p>
        <ol>
          <li>Monkey</li>
          <li>Dog</li>
          <li>Bird</li>
          <li>Horse</li>
          <li>Cow</li>
        </ol>
      </div>
    );
  }
}
 
export default Animals;