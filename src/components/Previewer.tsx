import { marked } from 'marked';
import '../styles/Previewer.css';

interface PreviewerProps {
    markdown: string;
}

const Previewer: React.FC<PreviewerProps> = ({ markdown }) => {
    const getMarkdownText = () => {
        return { __html: marked.parse(markdown) };
    };

    return (
        <div className="previewer-container">
            <h2 className="previewer-title">Preview</h2>
            <div
                className="previewer-content"
                dangerouslySetInnerHTML={getMarkdownText()}
                aria-label="Markdown preview"
            />
        </div>
    );
};

export default Previewer;