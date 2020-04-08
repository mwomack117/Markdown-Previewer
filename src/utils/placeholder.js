const placeholder = `
## Headers
---

# React Markdown Previewer!
## This is a sub-heading...(h2)
### And I'm a third tier heading:
###### You can even do an \`<h6>\` heading

Three or more...

---
Hyphens
***
Asterisks
___
Underscores

...for line breaks

## Code
---
Heres some code, \`<div></div>\`,  between 2 backticks.

\`\`\`
// three backticks for multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

## Emphasis
---
  
You can also make text **bold**... 
Or _italic_.
Or... wait for it... **_both!_**
And ~~cross stuff out~~.

## Links, Blockquotes, Tables
---

There's also [links](https://www.freecodecamp.com)
> Block Quotes!

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
> - Captain Janeway

And if you want to make tables:

| Tables    | Are          | Cool   |
----------- |:------------:| ------:| 
| Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it. |


## Lists
---

1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.
        
   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).
        
   To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)
        
* Unordered list can use asterisks
- Or minuses
+ Or pluses


## Images
---
![React Logo w/ Text](https://goo.gl/Umyytc "React Logo Title Text")
`;

export default placeholder;
