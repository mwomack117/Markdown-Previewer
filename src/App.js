import React, { Component } from "react";
import "./App.css";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

import placeholder from "./utils/placeholder";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorExpand: false,
      previewExpand: false,
    };
  }

  handleChange = (e) => {
    this.setState({ markdown: e.target.value });
  };

  render() {
    const { markdown } = this.state;

    return (
      <div className="wrapper">
        <div className="heading">
          <h1>A Simple Markdown Previewer</h1>
          <p className="description">
            Markdown is an easy-to-read, easy-to-write syntax for formatting
            plain text. Use it in the <span>Editor</span> box and see the
            fortmatted text in the
            <span> Preview</span> box.
          </p>
        </div>

        <div className="main">
          <Editor markdown={markdown} onChange={this.handleChange} />
          <Preview markdown={markdown} />
        </div>
      </div>
    );
  }
}

export default App;
