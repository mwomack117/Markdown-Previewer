(this.webpackJsonpmarkdown_previewer=this.webpackJsonpmarkdown_previewer||[]).push([[0],{17:function(e,n,t){e.exports=t(26)},22:function(e,n,t){},23:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(12),o=t.n(i),s=(t(22),t(13)),l=t(14),c=t(15),d=t(16);t(23);function h(e){return r.a.createElement("div",{className:"editor-container"},r.a.createElement("header",null,"Editor"),r.a.createElement("textarea",{id:"editor",value:e.markdown,onChange:e.onChange}))}var m=t(5),u=t.n(m),w=new u.a.Renderer;function p(e){return r.a.createElement("div",{id:"preview-container"},r.a.createElement("header",null,"Preview"),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:u()(e.markdown,{renderer:w})}}))}w.link=function(e,n,t){return'<a target="_blank" href="'.concat(e,'">').concat(t)+"</a>"},u.a.setOptions({renderer:w,breaks:!0,gfm:!0});var k=function(e){Object(d.a)(t,e);var n=Object(c.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).handleChange=function(e){a.setState({markdown:e.target.value})},a.state={markdown:"\n## Headers\n---\n\n# React Markdown Previewer!\n## This is a sub-heading...(h2)\n### And I'm a third tier heading:\n###### You can even do an `<h6>` heading\n\nThree or more...\n\n---\nHyphens\n***\nAsterisks\n___\nUnderscores\n\n...for line breaks\n\n## Code\n---\nHeres some code, `<div></div>`,  between 2 backticks.\n\n```\n// three backticks for multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\n## Emphasis\n---\n  \nYou can also make text **bold**... \nOr _italic_.\nOr... wait for it... **_both!_**\nAnd ~~cross stuff out~~.\n\n## Links, Blockquotes, Tables\n---\n\nThere's also [links](https://www.freecodecamp.com)\n> Block Quotes!\n\n> Coffee. The finest organic suspension ever devised... I beat the Borg with it.\n> - Captain Janeway\n\nAnd if you want to make tables:\n\n| Tables    | Are          | Cool   |\n----------- |:------------:| ------:| \n| Your content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it. |\n\n\n## Lists\n---\n\n1. First ordered list item\n2. Another item\n  * Unordered sub-list. \n1. Actual numbers don't matter, just that it's a number\n  1. Ordered sub-list\n4. And another item.\n        \n   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n        \n   To have a line break without a paragraph, you will need to use two trailing spaces.\u22c5\u22c5\n   Note that this line is separate, but within the same paragraph.\n   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n        \n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n\n## Images\n---\n![React Logo w/ Text](https://goo.gl/Umyytc \"React Logo Title Text\")\n",editorExpand:!1,previewExpand:!1},a}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.markdown;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"A Simple Markdown Previewer"),r.a.createElement("p",{className:"description"},"Markdown is an easy-to-read, easy-to-write syntax for formatting plain text. Use it in the ",r.a.createElement("span",null,"Editor")," box and see the fortmatted text in the",r.a.createElement("span",null," Preview")," box.")),r.a.createElement("div",{className:"main"},r.a.createElement(h,{markdown:e,onChange:this.handleChange}),r.a.createElement(p,{markdown:e})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.8fd72cb5.chunk.js.map