import { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import './styles/App.css';

const App = () => {
  const [markdownText, setMarkdownText] = useState<string>("# Hello World\n\nStart typing your markdown here...");

  const handleTextChange = (text: string) => {
    setMarkdownText(text);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Markdown Previewer</h1>
      <div className="editor-previewer-container">
        <Editor
          onTextChange={handleTextChange}
          initialText={markdownText}
        />
        <Previewer markdown={markdownText} />
      </div>
    </div>
  );
};

export default App;