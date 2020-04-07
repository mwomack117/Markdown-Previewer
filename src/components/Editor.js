import React from "react";

export default function Editor(props) {
  return (
    <div className="editor-container">
      <header>Editor</header>
      <textarea id="editor" value={props.markdown} onChange={props.onChange} />
    </div>
  );
}
