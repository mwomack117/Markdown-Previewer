import React from "react";
import marked from "marked";

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};
marked.setOptions({
  renderer,
  breaks: true,
  gfm: true,
});

export default function Preview(props) {
  return (
    <div id="preview-container">
      <header>Preview</header>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderer }),
        }}
      />
    </div>
  );
}
