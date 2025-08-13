import React, { useState, useEffect } from "react";
import '../styles/Editor.css'

interface EditorProps {
    onTextChange: (text: string) => void;
    initialText: string;
}

const Editor: React.FC<EditorProps> = ({ onTextChange, initialText }) => {
    const [editorText, setEditorText] = useState<string>(initialText);

    useEffect(() => {
        setEditorText(initialText);
    }, [initialText]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        setEditorText(newText);
        onTextChange(newText);
    };

    return (
        <div className="editor-container">
            <h2 className="editor-title">Editor</h2>
            <textarea
                className="editor-textarea"
                value={editorText}
                onChange={handleChange}
                aria-label="Markdown editor"
            />
        </div>
    );
};

export default Editor;