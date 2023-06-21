import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";

import React from "react";
const myTheme = createTheme({
  theme: "light",
  settings: {
    background: "#ffffff",
    foreground: "#000",
    caret: "red",
    selection: "#8a91991a",
    selectionMatch: "red",
    lineHighlight: "#8a91991a",
    gutterBackground: "#fff",
    gutterForeground: "#D9DEEB"
  },
  styles: [
    { tag: t.comment, color: "#919EAD" },
    { tag: t.variableName, color: "#6D6BDE" },
    { tag: t.quote, color: "#000" },
    { tag: t.moduleKeyword, color: "red" },
    { tag: [t.string, t.special(t.brace)], color: "#56BA90" },
    { tag: t.number, color: "#5c6166" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#5c6166" },
    { tag: t.operator, color: "#5c6166" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "red" },
    { tag: t.angleBracket, color: "#000" },
    { tag: t.tagName, color: "#fff" },
    { tag: t.attributeName, color: "#41ABE1" },
    { tag: t.propertyName, color: "#56BA90" },
    { tag: t.annotation, color: "red" }
  ]
});
const extensions = [javascript({ jsx: true })];

export default function App() {
  const onChange = React.useCallback((value, viewUpdate) => {}, []);
  return (
    <CodeMirror
      style={{ border: "2px solid red", borderRadius: "4px" }}
      value="console.log('hello world!');"
      height="200px"
      theme={myTheme}
      extensions={extensions}
      onChange={onChange}
    />
  );
}
