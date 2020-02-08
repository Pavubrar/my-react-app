import React from "react";
import { ThemeContext } from "./Context.js";
import "./ThemeChooser.css";
// import Form from "react-bootstrap/Form";

class ThemeApp extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div className="App">
        <header className="App-header-theme">
          <h1
            style={{
              color: "Blue",
              fontFamily: "Ubuntu",
              fontSize: "2.5rem"
            }}
          >
            <strong>Choose Menu Font Color</strong>
          </h1>
          <Form.Control
            as="select"
            title="Choose Font Color"
            value={this.context.fontColor}
            onChange={this.context.changeFont}
          >
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
          </Form.Control>
        </header>
      </div>
    );
  }
}

export default ThemeApp;