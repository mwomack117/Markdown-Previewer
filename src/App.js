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
        <h1 className="title">A Simple Markdown Previewer</h1>
        <div className="main">
          <Editor markdown={markdown} onChange={this.handleChange} />
          <Preview markdown={markdown} />
        </div>
      </div>
    );
  }
}

export default App;
