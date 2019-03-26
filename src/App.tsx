import * as PIXI from "pixi.js";
import { Stage, Sprite } from "@inlet/react-pixi";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stage>
          <Sprite image={logo} x={100} y={100} />
        </Stage>
      </div>
    );
  }
}

export default App;
