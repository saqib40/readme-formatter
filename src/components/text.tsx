//import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown"; // Markdown mode
import "ace-builds/src-noconflict/theme-twilight"; // A dark theme similar to atomDark

interface textPropInter {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>
}

export default function TextArea({ text, setText }: textPropInter) {
    return (
        <AceEditor
            mode="markdown" // Language mode
            theme="twilight" // Dark theme
            value={text} // Controlled value
            onChange={(newText) => setText(newText)} // Update state on change
            name="text-editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                showLineNumbers: true,
                tabSize: 2,
                showPrintMargin: false, // that annoying vertival line
                wrap: true,
                scrollPastEnd: true, // Scroll past end to allow typing at bottom
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace", // Modern monospace fonts
            }}
            style={{
                width: "100%",
                height: "100%",
            }}
            fontSize={15} //in pixels
            readOnly={false} // Ensure it’s editable and selectable
            highlightActiveLine={true}
        />
    );
}