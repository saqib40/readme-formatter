
import { Copy, Download, RotateCcw, FileText } from 'lucide-react';

interface ToolbarProps {
    text: string;
    setText: (text: string) => void;
    initialText: string;
}

export default function Toolbar({ text, setText, initialText }: ToolbarProps) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            // Optional: Could add a toast notification here
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleDownload = () => {
        const blob = new Blob([text], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'readme.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset the editor? All changes will be lost.')) {
            setText(initialText);
        }
    };

    return (
        <div className="toolbar">
            <div className="toolbar-label">
                <FileText size={16} />
                <span>Markdown</span>
            </div>
            <div className="toolbar-actions">
                <button onClick={handleCopy} className="toolbar-btn" title="Copy Markdown">
                    <Copy size={16} />
                    <span>Copy</span>
                </button>
                <button onClick={handleDownload} className="toolbar-btn" title="Download .md">
                    <Download size={16} />
                    <span>Download</span>
                </button>
                <button onClick={handleReset} className="toolbar-btn" title="Reset">
                    <RotateCcw size={16} />
                    <span>Reset</span>
                </button>
            </div>
        </div>
    );
}
